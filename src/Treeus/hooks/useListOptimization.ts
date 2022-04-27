import React, { useCallback, useEffect, useState } from 'react';
import { ITreeusItem } from '../Treeus.type';

const MIN_ITEMS_COUNT_FOR_OPTIMIZATION = 100;
const ADDITION_ITEMS_IN_VIEW = 2;
const DEFAULT_RENDER_COUNT = 30;

export default function useListOptimization(
    items: ITreeusItem[],
    ulRef: React.RefObject<HTMLElement>,
    containerRef: React.RefObject<HTMLElement>,
): [ITreeusItem[], {} | { height: string; paddingTop: string }] {
    if (items.length < MIN_ITEMS_COUNT_FOR_OPTIMIZATION) {
        return [items, {}];
    }

    const [containerHeight, setContainerHeight] = useState(0);
    const [itemHeight, setItemHeight] = useState(0);
    const [containerTopPadding, setContainerTopPadding] = useState(0);
    const [renderItemsCount, setRenderItemsCount] = useState(DEFAULT_RENDER_COUNT);
    const [renderItems, setRenderItems] = useState(items.slice(0, renderItemsCount));

    useEffect(() => {
        if (containerRef.current && ulRef.current?.firstChild) {
            const { firstChild } = ulRef.current;
            const childHeight = (firstChild as HTMLElement).offsetHeight;

            setRenderItemsCount(Math.floor(containerRef.current.offsetHeight / childHeight) + ADDITION_ITEMS_IN_VIEW);
            setItemHeight(childHeight);
            setContainerHeight(childHeight * items.length);
        }
    }, [containerRef, ulRef, itemHeight, containerHeight]);

    const handleScroll = useCallback(() => {
        const container = containerRef.current;
        if (container) {
            const pseudoStartIndex = Math.floor(container.scrollTop / itemHeight);

            setContainerTopPadding(pseudoStartIndex * itemHeight);
            setRenderItems(items.slice(pseudoStartIndex, pseudoStartIndex + renderItemsCount));
        }
    }, [containerRef, containerTopPadding, renderItems, renderItemsCount]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [containerRef, handleScroll]);

    return [
        renderItems,
        { position: 'absolute', height: `${containerHeight}px`, paddingTop: `${containerTopPadding}px` },
    ];
}
