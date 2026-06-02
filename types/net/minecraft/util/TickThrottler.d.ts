import type { Object } from '../../../java/lang/Object.d.ts'
export class TickThrottler extends Object {
    constructor(incrementStep: number, threshold: number)
    // private count: number;
    // private incrementStep: number;
    // private threshold: number;
    increment(): void;
    isUnderThreshold(): boolean;
    tick(): void;
}