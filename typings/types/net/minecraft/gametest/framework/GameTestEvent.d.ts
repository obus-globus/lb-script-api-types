import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GameTestEvent extends Object {
    static create(paramrunnable: () => void): GameTestEvent;
    static create(paramexpectedTick: number, paramrunnable: () => void): GameTestEvent;
    static createWithMinimumDelay(paramminimumDelay: number, paramrunnable: () => void): GameTestEvent;
    private constructor(expectedDelay: number, minimumDelay: number, assertion: () => void)
    assertion: () => void;
    expectedDelay: number;
    minimumDelay: number;
}