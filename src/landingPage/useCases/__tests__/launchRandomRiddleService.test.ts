import { describe, expect, it, vi } from 'vitest';
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
})