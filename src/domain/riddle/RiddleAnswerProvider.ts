import { createGenericContext } from '../../common/context';
import { RiddleAnswer } from './riddleService';

export type RiddleAnswerAdapter = (riddleId: string) => Promise<RiddleAnswer>;

export const { useContext, createContextProvider: provideRiddleAnswer } =
    createGenericContext<RiddleAnswerAdapter>();

export function useRiddleAnswer() {
    return useContext().value;
}
