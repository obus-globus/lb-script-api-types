import type { Object } from '../../../java/lang/Object.d.ts'
export class SmoothDouble extends Object {
    constructor()
    // private lastAmount: number;
    // private remainingValue: number;
    // private targetValue: number;
    getNewDeltaValue(targetDelta: number, time: number): number;
    reset(): void;
}