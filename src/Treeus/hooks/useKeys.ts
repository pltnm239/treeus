import React, { useState, KeyboardEvent, useMemo } from 'react';
import { ITreeusItem } from '../Treeus.type';

interface ITreeusFlatNavItem {
    id: string;
    index: number;
    level: number;
    children?: ITreeusItem[];
    hasChildren?: boolean;
}

export default function useKeys(
    items: ITreeusItem[],
    setSelectedItemId: (id: string) => void,
    updateOpenItemsIds: (id: string) => void,
    checkOpenItemId: (id: string) => boolean,
    containerRef: React.RefObject<HTMLElement>,
): [(event: KeyboardEvent<HTMLUListElement>) => void, ITreeusFlatNavItem[], (num: number) => void] {
    const [index, setIndex] = useState(0);
    const list = useMemo(() => getFlatList(items), items);
    const lastParent = useMemo(() => list.find((item) => item.id === items[items.length - 1].id), items);
    let currentItem = list[index];
    let nextIndex = 0;

    const goNext = () => {
        if (currentItem.hasChildren) {
            if (checkOpenItemId(currentItem.id)) {
                nextIndex = index + 1;
            } else {
                const nextParent = list.slice(index + 1).find((item) => item.level <= currentItem.level);
                if (nextParent?.index) {
                    nextIndex = nextParent.index;
                }
            }
        } else {
            nextIndex = index + 1;
        }

        if (lastParent && index >= lastParent.index) {
            if (!checkOpenItemId(lastParent.id) || !list[nextIndex]) {
                return;
            }
        }

        scrollToLastVisible(list[nextIndex].id, containerRef);
        setIndex(nextIndex);
        setSelectedItemId(list[nextIndex].id);
    };

    const findOpenParent = (prevItemIndex: number): number => {
        if (list[prevItemIndex].level === 0) {
            return prevItemIndex;
        }

        const prevItemParent = list
            .slice(0, prevItemIndex)
            .reverse()
            .find((item) => item.level < list[prevItemIndex].level);

        if (prevItemParent) {
            return checkOpenItemId(prevItemParent.id) ? prevItemIndex : findOpenParent(prevItemParent.index);
        }

        return prevItemIndex;
    };

    const goBack = () => {
        const prevItem = list[index - 1];
        if (!prevItem) {
            return;
        }

        if ((prevItem.level === currentItem.level && !prevItem.hasChildren) || prevItem.level < currentItem.level) {
            nextIndex = index - 1;
        } else {
            nextIndex = findOpenParent(index - 1);
        }

        scrollToLastVisible(list[nextIndex].id, containerRef);
        setIndex(nextIndex);
        setSelectedItemId(list[nextIndex].id);
    };

    const keyboardHandler = (event: KeyboardEvent<HTMLUListElement>) => {
        switch (event.code) {
            case 'Tab':
                scrollToTop(containerRef, list[0].id);
                setIndex(0);
                setSelectedItemId(list[0].id);

                break;
            case 'ArrowDown':
                goNext();

                break;
            case 'ArrowUp':
                goBack();

                break;
            case 'Enter':
                updateOpenItemsIds(list[index]?.id);

                break;
            case 'ArrowRight':
                if (!checkOpenItemId(currentItem.id) && currentItem.hasChildren) {
                    updateOpenItemsIds(currentItem.id);
                } else {
                    goNext();
                }

                break;
            case 'ArrowLeft':
                if (checkOpenItemId(currentItem.id)) {
                    updateOpenItemsIds(currentItem.id);
                } else {
                    goBack();
                }

                break;
        }

        event.preventDefault();
        event.stopPropagation();
    };

    return [keyboardHandler, list, setIndex];
}

function getFlatList(items: ITreeusItem[]) {
    const stack: ITreeusFlatNavItem[] = [...items.map(treeusItemToNavMapper(0))];
    const res = [];

    while (stack.length) {
        const next = stack.pop() as ITreeusFlatNavItem;
        if (next?.children) {
            const children = next.children.map(treeusItemToNavMapper(next.level + 1));
            next.hasChildren = true;
            delete next.children;

            stack.push(next, ...children);
        } else {
            res.push(next);
        }
    }

    return res.reverse().map((item, index) => {
        item.index = index;

        return item;
    });
}

function treeusItemToNavMapper(level: number): (item: ITreeusItem, index: number) => ITreeusFlatNavItem {
    return ({ id, children }: ITreeusItem) => ({
        index: 0,
        id,
        level,
        children,
    });
}

function scrollToLastVisible(nextItemId: string, containerRef: React.RefObject<HTMLElement>) {
    const container = containerRef.current;
    const currentItem = document.getElementById(nextItemId);
    if (!container || !currentItem) {
        return;
    }

    currentItem.focus({ preventScroll: true });

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.offsetHeight;

    if (containerBottom - currentItem.offsetTop < currentItem.offsetHeight) {
        container.scrollTo(0, containerTop + currentItem.offsetHeight);
    }

    if (currentItem.offsetTop - containerTop < currentItem.offsetHeight) {
        container.scrollTo(0, containerTop - currentItem.offsetHeight);
    }
}

function scrollToTop(containerRef: React.RefObject<HTMLElement>, firstId: string) {
    if (containerRef?.current) {
        containerRef?.current.scrollTo(0, 0);
    }

    const elementAwaiter = setInterval(() => {
        const firstItem = document.getElementById(firstId);
        if (firstItem) {
            firstItem.focus();
            clearInterval(elementAwaiter);
        }
    });
}
