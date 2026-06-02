import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DataFetcher$SuccessfulComputationResult<T extends Object | number | string | boolean> extends Record {
    // private time: number;
    // private value: T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    time(): number;
    toString(): string;
    value(): T;
}