import type { ReactNode, MouseEvent } from 'react';

type TOnClick = (event: MouseEvent, item: ITreeusItem) => void;

export interface ITreeusContext {
    selectedItemId: string;
    openItemsIds: string[];
    onListItemClick: TOnClick;
}

export interface ITreeusItem {
    id: string;
    label: string | ReactNode;
    children?: ITreeusItem[];
}

export interface ITreeusProps {
    items: ITreeusItem[];
    className?: string;
    onClick?: TOnClick;
    renderItemsCount?: number;
}
