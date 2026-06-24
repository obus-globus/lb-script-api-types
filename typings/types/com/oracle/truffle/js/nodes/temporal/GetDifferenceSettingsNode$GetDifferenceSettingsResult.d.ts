import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetDifferenceSettingsNode$GetDifferenceSettingsResult extends Record {
    constructor(smallestUnit: TemporalUtil$Unit, largestUnit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode, roundingIncrement: number)
    // private largestUnit: TemporalUtil$Unit;
    // private roundingIncrement: number;
    // private roundingMode: TemporalUtil$RoundingMode;
    // private smallestUnit: TemporalUtil$Unit;
    equals(o: Object | null): boolean;
    hashCode(): number;
    largestUnit(): TemporalUtil$Unit;
    roundingIncrement(): number;
    roundingMode(): TemporalUtil$RoundingMode;
    smallestUnit(): TemporalUtil$Unit;
    toString(): string;
}