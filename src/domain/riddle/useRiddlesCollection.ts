import { useQuery } from '@tanstack/react-query';
import { getRiddles } from '../../landingPage/useCases/launchRandomRiddle/riddlesAdapter';

export const useRiddlesCollection = () => {
    return useQuery({
        queryKey: ['riddles'],
        queryFn: getRiddles,
    });
};
