import type { BigInt } from '../../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NormalizedDurationRecord extends Record {
    // private days: number;
    // private months: number;
    // private normalizedTimeTotalNanoseconds: BigInt;
    // private weeks: number;
    // private years: number;
    days(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    months(): number;
    normalizedTimeTotalNanoseconds(): BigInt;
    toString(): string;
    weeks(): number;
    years(): number;
}