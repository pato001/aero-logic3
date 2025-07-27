import { useQuery } from '@tanstack/react-query';
import { getRiddle } from './riddleAdapter';

export const useRiddle = (id: string) => {
    return useQuery({
        queryKey: ['riddles', id],
        queryFn: () => getRiddle(id),
        enabled: !!id,
    });
};
