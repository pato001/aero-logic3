import { Riddle } from '../../../domain/riddle/riddleService';
import { getAnswerFor } from 'riddle-exam';
import { RiddleAnswerAdapter } from '../../../domain/riddle/RiddleAnswerProvider';

export const getRiddle = async (id: string): Promise<Riddle> => {
    return fetch(`http://localhost:3000/riddles/${id}`).then((response) =>
        response.json(),
    );
};

export const getAnswer: RiddleAnswerAdapter = (id: string) => {
    return getAnswerFor(id);
};
