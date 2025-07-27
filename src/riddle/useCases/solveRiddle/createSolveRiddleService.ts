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

    const getAnswerOptionClassName = (answerId: string) => ({
        'cursor-pointer': !selected,
        'border-blue-500': !correct,
        "border-green-700 text-green-900 before:content-['✓']":
            selected === answerId && correct && correct === answerId,
        "border-red-700 text-red-800  before:content-['✗']":
            selected === answerId && correct && correct !== answerId,
    });

    return {
        getAnswerOptionClassName,
        random,
        shouldDisplayRiddle,
        status: getStatus(),
    };
};
