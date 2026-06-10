import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalAmount } from '../../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Temporal extends TemporalAccessor, Object {
    get(arg0: TemporalField): number;
    isSupported(arg0: TemporalUnit): boolean;
    minus(arg0: TemporalAmount): Temporal;
    minus(arg0: number, arg1: TemporalUnit): Temporal;
    plus(arg0: TemporalAmount): Temporal;
    plus(arg0: number, arg1: TemporalUnit): Temporal;
    query<R extends Object | number | string | boolean>(arg0: (param0: TemporalAccessor) => R): R;
    range(arg0: TemporalField): ValueRange;
    until(arg0: Temporal, arg1: TemporalUnit): number;
    with(arg0: (param0: Temporal) => Temporal): Temporal;
    with(arg0: TemporalField, arg1: number): Temporal;
}