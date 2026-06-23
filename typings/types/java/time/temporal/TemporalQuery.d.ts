import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TemporalQuery<R extends unknown> extends Object{
    queryFrom(arg0: TemporalAccessor): R;
}