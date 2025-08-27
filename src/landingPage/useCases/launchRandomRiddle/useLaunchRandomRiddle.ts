import { createLaunchRandomRiddleModel } from './launchRandomRiddleService';
import { useRandomRiddle } from '../../../domain/riddle/useRandomRiddle';

export const useLaunchRandomRiddle = () => {
    const { data } = useRandomRiddle();

    return {
        ...createLaunchRandomRiddleModel(new Date()),
        id: data?.id,
    };
};
