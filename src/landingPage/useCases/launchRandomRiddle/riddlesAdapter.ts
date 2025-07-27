import { Riddle } from '../../../domain/riddle/riddleService';

export const getRiddles = async (): Promise<Riddle[]> => {
    return fetch('http://localhost:3000/riddles').then((response) => response.json());
};
