import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Chronometer extends Object {
    constructor(lastUpdate?: number)
    readonly elapsed: number;
    // private lastUpdate: number;
    elapsedUntil(time: number): number;
    hasAtLeastElapsed(ms?: number): boolean;
    hasElapsed(ms?: number): boolean;
    reset(lastUpdate?: number): void;
    toString(): string;
    waitForAtLeast(ms: number): void;
}