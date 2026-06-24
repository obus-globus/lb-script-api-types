import type { JSTemporalDurationRecord } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TemporalDurationWithTotalRecord extends Record {
    constructor(duration: JSTemporalDurationRecord, total: number)
    // private duration: JSTemporalDurationRecord;
    // private total: number;
    duration(): JSTemporalDurationRecord;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    total(): number;
}