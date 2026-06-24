import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Stopwatch extends Record {
    constructor(creationTime: number)
    constructor(creationTime: number, accumulatedElapsedTime: number)
    // private accumulatedElapsedTime: number;
    // private creationTime: number;
    accumulatedElapsedTime(): number;
    creationTime(): number;
    elapsedMilliseconds(currentTime: number): number;
    elapsedSeconds(currentTime: number): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}