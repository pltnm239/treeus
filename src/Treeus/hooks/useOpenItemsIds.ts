import { useState } from 'react';
import { ITreeusItem } from '../Treeus.type';

export default function useOpenItemsIds(
    openItemsList: ITreeusItem['id'][],
): [ITreeusItem['id'][], (itemId: ITreeusItem['id']) => void, (itemId: ITreeusItem['id']) => boolean] {
    const [openItemsIds, setOpenItemsIds] = useState(openItemsList);

    return [
        openItemsIds,
        (itemId) => {
            if (!openItemsIds.includes(itemId)) {
                setOpenItemsIds([...openItemsIds, itemId]);
            } else {
                setOpenItemsIds(openItemsIds.filter((id) => id !== itemId));
            }
        },
        (itemId) => openItemsIds.includes(itemId),
    ];
}
