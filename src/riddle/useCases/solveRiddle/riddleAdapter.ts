import { Riddle, RiddleAnswer } from '../../../domain/riddle/riddleService';
import { getAnswerFor } from 'riddle-exam';

export const getRiddle = async (id: string): Promise<Riddle> => {
    return fetch(`http://localhost:3000/riddles/${id}`).then((response) =>
        response.json(),
    );
};

export function getAnswer(id: string): Promise<RiddleAnswer> {
    return getAnswerFor(id);
}
