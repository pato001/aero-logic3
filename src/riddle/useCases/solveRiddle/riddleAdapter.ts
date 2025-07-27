import { Riddle } from '../../../domain/riddle/riddleService';

export const getRiddle = async (id: string): Promise<Riddle> => {
    return fetch(`http://localhost:3000/riddles/${id}`).then((response) =>
        response.json(),
    );
};
