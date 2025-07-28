import { createLaunchRandomRiddleModel } from './launchRandomRiddleService';
import { useRandomRiddle } from '../../../domain/riddle/useRandomRiddle';

export const useLaunchRandomRiddle = () => {
    const date = new Date();
    const { workInterval, timestamp } = createLaunchRandomRiddleModel(date);

    const { data } = useRandomRiddle();

    return { workInterval, timestamp, id: data?.id };
};
