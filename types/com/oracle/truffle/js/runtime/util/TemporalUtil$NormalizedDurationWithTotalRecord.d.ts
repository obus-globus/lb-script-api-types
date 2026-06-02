import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalUtil$NormalizedDurationWithTotalRecord extends Record {
    // private normalizedDuration: NormalizedDurationRecord;
    // private total: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    normalizedDuration(): NormalizedDurationRecord;
    toString(): string;
    total(): number;
}