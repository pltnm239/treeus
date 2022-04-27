import React, { useState, memo, useRef, MouseEvent, useContext } from 'react';
import { useKeys, useListOptimization, useOpenItemsIds } from './hooks';
import type { ITreeusProps, ITreeusItem, ITreeusContext } from './Treeus.type';
import './Treeus.css';

const TreeusContext = React.createContext<ITreeusContext>({
    selectedItemId: '',
    openItemsIds: [],
    onListItemClick: () => null,
});

const TreeusItem: React.FC<ITreeusItem> = memo(({ id, label, children }) => {
    const { selectedItemId, openItemsIds, onListItemClick } = useContext(TreeusContext);
    const isOpen = openItemsIds.includes(id);
    const hasChildren = children && children.length > 0;
    const onClickEvent = (event: MouseEvent) => onListItemClick(event, { id, label, children });

    return (
        <li
            id={id}
            className="Treeus__listItem"
            data-selected={selectedItemId === id}
            data-open={isOpen}
            data-has-children={hasChildren}
            tabIndex={0}
        >
            <label className="Treeus__listItemLabel" onClick={onClickEvent}>
                {label}
            </label>
            {hasChildren && isOpen && (
                <ul className="Treeus__list">
                    {children.map((ch) => (
                        <TreeusItem {...ch} key={ch.id} />
                    ))}
                </ul>
            )}
        </li>
    );
});

export const Treeus: React.FC<ITreeusProps> = memo(({ items, onClick, className }) => {
    if (items?.length < 1) {
        return null;
    }

    let rootClassNames = 'Treeus';
    if (className) {
        rootClassNames += ` ${className}`;
    }

    const containerRef = useRef(null);
    const ulRef = useRef(null);
    const [renderItems, style] = useListOptimization(items, ulRef, containerRef);
    const [selectedItemId, setSelectedItemId] = useState<string>('');
    const [openItemsIds, toggleOpenItemIds, checkOpenItemId] = useOpenItemsIds([]);
    const [handleKeyDown, list, setIndex] = useKeys(
        items,
        setSelectedItemId,
        toggleOpenItemIds,
        checkOpenItemId,
        containerRef,
    );

    const onListItemClick = (event: MouseEvent, item: ITreeusItem) => {
        setSelectedItemId(item.id);
        toggleOpenItemIds(item.id);
        setIndex(list.findIndex((listItem) => listItem.id === item.id));

        if (onClick) {
            onClick(event, item);
        }
    };

    return (
        <TreeusContext.Provider value={{ selectedItemId, openItemsIds, onListItemClick }}>
            <div className="Treeus__container" ref={containerRef} tabIndex={-1}>
                <ul className={rootClassNames} ref={ulRef} style={style} onKeyDown={handleKeyDown}>
                    {renderItems.map((item) => (
                        <TreeusItem {...item} key={item.id} />
                    ))}
                </ul>
            </div>
        </TreeusContext.Provider>
    );
});
