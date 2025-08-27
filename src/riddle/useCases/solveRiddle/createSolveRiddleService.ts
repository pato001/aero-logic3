import { Riddle } from '../../../domain/riddle/riddleService';

type CreateSolveRiddleModelProps = {
    isLoading: boolean;
    selected: string | undefined;
    correct: string | undefined;
    randomRiddle: Riddle | undefined;
    answersAvailable: boolean;
};

export const createSolveRiddleModel = ({
    isLoading,
    selected,
    correct,
    randomRiddle,
    answersAvailable,
}: CreateSolveRiddleModelProps) => {
    const shouldDisplayRiddle = answersAvailable && !isLoading;
    const random = !!randomRiddle?.id && !!correct ? randomRiddle.id : undefined;

    const getStatus = () => {
        if (selected && !!correct && selected === correct) {
            return 'correct';
        }
        if (selected && !!correct && selected !== correct) return 'incorrect';
        return '';
    };


    return {
        random,
        shouldDisplayRiddle,
        status: getStatus(),
    };
};
