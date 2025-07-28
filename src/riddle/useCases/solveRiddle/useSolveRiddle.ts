import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnswerFor } from 'riddle-exam';
import { useRandomRiddle } from '../../../domain/riddle/useRandomRiddle';
import { useRiddle } from './useRiddle';
import { createSolveRiddleModel } from './createSolveRiddleService';

export const useSolveRiddle = () => {
    const { id } = useParams<{ id: string }>();

    const [correct, setCorrect] = useState<string>();
    const [selected, setSelected] = useState<string>();

    const { isLoading, data: riddle } = useRiddle(id as string);
    const { data: randomRiddle, refetch } = useRandomRiddle();

    const answers = useMemo(
        () => riddle?.answers?.toSorted(() => Math.random() - 0.5),
        [riddle?.answers],
    );

    const { getAnswerOptionClassName, random, shouldDisplayRiddle, status } =
        createSolveRiddleModel({
            isLoading,
            selected,
            correct,
            randomRiddle,
            answersAvailable: !!answers,
        });

    const handleClick = async (id: string) => {
        if (selected || !riddle) {
            return;
        }
        setSelected(id);

        const data = await getAnswerFor(riddle.id);
        refetch();
        setCorrect(data.id);
    };

    return {
        riddle,
        answers,
        random,
        shouldDisplayRiddle,
        status,
        handleClick,
        getAnswerOptionClassName,
    };
};
