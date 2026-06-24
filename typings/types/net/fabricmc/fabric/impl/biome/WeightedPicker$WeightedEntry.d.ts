import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WeightedPicker$WeightedEntry<T extends unknown> extends Record {
    constructor(entry: T, weight: number, upperWeightBound: number)
    // private entry: T;
    // private upperWeightBound: number;
    // private weight: number;
    entry(): T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    upperWeightBound(): number;
    weight(): number;
}