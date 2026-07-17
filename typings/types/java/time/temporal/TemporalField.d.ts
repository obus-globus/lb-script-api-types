import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TemporalField extends Object{
    adjustInto<R extends Temporal>(arg0: R, arg1: number): R;
    getBaseUnit(): TemporalUnit;
    getDisplayName(arg0: Locale): string;
    getFrom(arg0: TemporalAccessor): number;
    getRangeUnit(): TemporalUnit;
    isDateBased(): boolean;
    isSupportedBy(arg0: TemporalAccessor): boolean;
    isTimeBased(): boolean;
    range(): ValueRange;
    rangeRefinedBy(arg0: TemporalAccessor): ValueRange;
    resolve(arg0: JavaMap<TemporalField, number>, arg1: TemporalAccessor, arg2: ResolverStyle): TemporalAccessor;
}