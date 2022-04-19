import React, { MouseEvent, useState } from 'react';
import type { ITreeusProps, ITreeusItem } from './Treeus.type';
import './Treeus.css';

export const TreeusItem: React.FC<ITreeusItem> = ({ id, label, children, onClick, rootState }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const hasChildren = children && children.length > 0;
    const onListItemClick = (event: MouseEvent, item: ITreeusItem) => {
        if (onClick) {
            onClick(event, item);
        }

        setIsOpen(!isOpen);
    };

    return (
        <li
            className="Treeus__listItem"
            data-selected={rootState?.selectedItemId === id}
            data-open={isOpen}
            data-has-children={hasChildren}
        >
            <label
                className="Treeus__listItemLabel"
                onClick={(event) => onListItemClick(event, { id, label, children })}
            >
                {label}
            </label>
            {hasChildren && (
                <ul className="Treeus__list" hidden={!isOpen}>
                    {children.map((ch) => (
                        <TreeusItem {...ch} key={id} onClick={onClick} rootState={rootState} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export const Treeus: React.FC<ITreeusProps> = ({ items, onClick, className }) => {
    if (items?.length < 1) {
        return null;
    }

    const [state, setState] = useState<ITreeusItem['rootState']>({ selectedItemId: '' });
    const onListItemClick = (event: MouseEvent, item: ITreeusItem) => {
        if (onClick) {
            onClick(event, item);
        }

        setState({ selectedItemId: item.id });
    };

    let rootClassNames = 'Treeus';
    if (className) {
        rootClassNames += ` ${className}`;
    }

    return (
        <ul className={rootClassNames}>
            {items.map((item) => (
                <TreeusItem {...item} key={item.id} onClick={onListItemClick} rootState={state} />
            ))}
        </ul>
    );
};
