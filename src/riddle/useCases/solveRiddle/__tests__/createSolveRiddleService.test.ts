
import { describe, it, expect } from 'vitest';
import { createSolveRiddleModel } from '../createSolveRiddleService';

const mockRiddle = {
  id: 'riddle-1',
  contents: 'What has keys but can’t open locks?',
  answers: [
    { id: 'a', text: 'Piano' },
    { id: 'b', text: 'Map' },
    { id: 'c', text: 'Locksmith' },
  ],
};

describe('createSolveRiddleModel', () => {
  it('returns true for shouldDisplayRiddle ', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: undefined,
      correct: undefined,
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.shouldDisplayRiddle).toBe(true);
  });

  it('returns false for shouldDisplayRiddle when isLoading is true', () => {
    const model = createSolveRiddleModel({
      isLoading: true,
      selected: undefined,
      correct: undefined,
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.shouldDisplayRiddle).toBe(false);
  });

  it('returns false for shouldDisplayRiddle when answersAvailable is false', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: undefined,
      correct: undefined,
      randomRiddle: mockRiddle,
      answersAvailable: false,
    });
    expect(model.shouldDisplayRiddle).toBe(false);
  });

  it('returns "correct" for status when selected is equal to correct', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: 'a',
      correct: 'a',
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.status).toBe('correct');
  });

  it('returns "incorrect" for status when selected is not equal correct', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: 'b',
      correct: 'a',
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.status).toBe('incorrect');
  });

  it('return empty string for status when selected is missing', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: undefined,
      correct: 'a',
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.status).toBe('');
  });

  it('return empty string for status when correct is missing', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: 'a',
      correct: undefined,
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.status).toBe('');
  });

  it('returns random riddle id', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: 'a',
      correct: 'a',
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.random).toBe('riddle-1');
  });

  it('returns undefined for random when randomRiddle is missing', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: 'a',
      correct: 'a',
      randomRiddle: undefined,
      answersAvailable: true,
    });
    expect(model.random).toBeUndefined();
  });

  it('returns undefined for random when correct is missing', () => {
    const model = createSolveRiddleModel({
      isLoading: false,
      selected: 'a',
      correct: undefined,
      randomRiddle: mockRiddle,
      answersAvailable: true,
    });
    expect(model.random).toBeUndefined();
  });

});
