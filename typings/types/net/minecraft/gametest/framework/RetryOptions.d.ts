import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RetryOptions extends Record {
    static noRetries(): RetryOptions;
    constructor(numberOfTries: number, haltOnFailure: boolean)
    // private haltOnFailure: boolean;
    // private numberOfTries: number;
    equals(o: Object | null): boolean;
    haltOnFailure(): boolean;
    hasRetries(): boolean;
    hasTriesLeft(attempts: number, successes: number): boolean;
    hashCode(): number;
    numberOfTries(): number;
    toString(): string;
    unlimitedTries(): boolean;
}