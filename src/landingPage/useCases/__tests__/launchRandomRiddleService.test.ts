import { describe, expect, it } from 'vitest';
import { createLaunchRandomRiddleModel } from '../launchRandomRiddle/launchRandomRiddleService';
describe('launch random riddle model', () => {
  it('returns formatted timestamp', () => {

    const date = new Date();
    date.setFullYear(2025);
    date.setMonth(0);
    date.setDate(23);
    date.setHours(10);
    date.setMinutes(4);

    const result = createLaunchRandomRiddleModel(date);

    expect(result.timestamp).toBe('2025-01-23 1004');
  });

  it('returns work interval when it is Busy Times', () => {
    const date = new Date();
    date.setHours(10);

    const result = createLaunchRandomRiddleModel(date)

    expect(result.workInterval).toBe('Busy Times');
  })

  it('returns work interval when it is Easy jets', () => {
    const date = new Date();
    date.setHours(12);

    const result = createLaunchRandomRiddleModel(date)

    expect(result.workInterval).toBe('Easy jets');
  })

  it('returns work interval when it is Returning pips', () => {
    const date = new Date();
    date.setHours(20);

    const result = createLaunchRandomRiddleModel(date)

    expect(result.workInterval).toBe('Returning pips');
  })

  it('returns work interval when it is Sleepies', () => {
    const date = new Date();
    date.setHours(3);

    const result = createLaunchRandomRiddleModel(date)

    expect(result.workInterval).toBe('Sleepies');
  })
})