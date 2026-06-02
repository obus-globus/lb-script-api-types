import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RoundRelativeDurationNode$DurationNudgeResultRecord extends Record {
    // private didExpandCalendarUnit: boolean;
    // private duration: NormalizedDurationRecord;
    // private nudgedEpochNs: BigInt;
    // private total: number;
    didExpandCalendarUnit(): boolean;
    duration(): NormalizedDurationRecord;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nudgedEpochNs(): BigInt;
    toString(): string;
    total(): number;
}