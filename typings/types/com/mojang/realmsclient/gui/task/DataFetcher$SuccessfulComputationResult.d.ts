import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataFetcher$SuccessfulComputationResult<T extends unknown> extends Record {
    private constructor(value: T, time: number)
    // private time: number;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    time(): number;
    toString(): string;
    value(): T;
}