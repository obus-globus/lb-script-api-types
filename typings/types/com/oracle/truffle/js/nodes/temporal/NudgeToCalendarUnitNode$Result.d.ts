import type { DurationNudgeResultRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/DurationNudgeResultRecord.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NudgeToCalendarUnitNode$Result extends Record {
    constructor(nudgeResult: DurationNudgeResultRecord, total: number)
    // private nudgeResult: DurationNudgeResultRecord;
    // private total: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nudgeResult(): DurationNudgeResultRecord;
    toString(): string;
    total(): number;
}