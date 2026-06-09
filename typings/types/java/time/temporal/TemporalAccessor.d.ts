import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TemporalAccessor extends Object {
    get(arg0: TemporalField): number;
    getLong(arg0: TemporalField): number;
    isSupported(arg0: TemporalField): boolean;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
}