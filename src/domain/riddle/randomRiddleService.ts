import { Riddle } from './riddleService';

export const getRandomRiddle = (riddles: Riddle[]) => {
    const ids = riddles?.map(({ id: riddleId }) => riddleId);
    const id = ids?.[Math.floor(Math.random() * ids.length)];
    return riddles.find((riddle) => riddle.id === id);
};
