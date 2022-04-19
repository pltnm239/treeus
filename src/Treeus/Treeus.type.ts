import type { ReactNode, MouseEvent } from 'react';

type TOnClick = (event: MouseEvent, item: ITreeusItem) => void;

export interface ITreeusItem {
    id: string;
    label: string | ReactNode;
    children?: ITreeusItem[];
    onClick?: TOnClick;
    rootState?: {
        selectedItemId: string;
    };
}

export interface ITreeusProps {
    items: ITreeusItem[];
    onClick?: TOnClick;
    className?: string;
}
