import { useMemo } from 'react';
import { useRiddlesCollection } from './useRiddlesCollection';
import { getRandomRiddle } from './randomRiddleService';

export const useRandomRiddle = () => {
    const { data = [], refetch } = useRiddlesCollection();

    const riddle = useMemo(() => {
        return getRandomRiddle(data);
    }, [data]);

    return {
        data: riddle,
        refetch,
    };
};
