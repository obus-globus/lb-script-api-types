import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export class AcquirePoi$JitteredLinearRetry extends Object {
    constructor(random: RandomSource, firstAttemptTimestamp: number)
    // private currentDelay: number;
    // private nextScheduledAttemptTimestamp: number;
    // private previousAttemptTimestamp: number;
    // private random: RandomSource;
    isStillValid(timestamp: number): boolean;
    markAttempt(timestamp: number): void;
    shouldRetry(timestamp: number): boolean;
    toString(): string;
}