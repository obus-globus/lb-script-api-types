import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CounterTrackerData extends Record {
    // private fixedData: number[];
    // private intArrays: number[][];
    equals(o: Object | null): boolean;
    fixedData(): number[];
    hashCode(): number;
    intArrays(): number[][];
    toString(): string;
}