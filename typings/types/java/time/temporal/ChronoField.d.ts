import type { Class } from '../../../java/lang/Class.d.ts'
import type { ResolverStyle } from '../../../java/time/format/ResolverStyle.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { ValueRange } from '../../../java/time/temporal/ValueRange.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ChronoField extends Enum<ChronoField> implements TemporalField {
    static ALIGNED_DAY_OF_WEEK_IN_MONTH: ChronoField;
    static ALIGNED_DAY_OF_WEEK_IN_YEAR: ChronoField;
    static ALIGNED_WEEK_OF_MONTH: ChronoField;
    static ALIGNED_WEEK_OF_YEAR: ChronoField;
    static AMPM_OF_DAY: ChronoField;
    static CLOCK_HOUR_OF_AMPM: ChronoField;
    static CLOCK_HOUR_OF_DAY: ChronoField;
    static DAY_OF_MONTH: ChronoField;
    static DAY_OF_WEEK: ChronoField;
    static DAY_OF_YEAR: ChronoField;
    static EPOCH_DAY: ChronoField;
    static ERA: ChronoField;
    static HOUR_OF_AMPM: ChronoField;
    static HOUR_OF_DAY: ChronoField;
    static INSTANT_SECONDS: ChronoField;
    static MICRO_OF_DAY: ChronoField;
    static MICRO_OF_SECOND: ChronoField;
    static MILLI_OF_DAY: ChronoField;
    static MILLI_OF_SECOND: ChronoField;
    static MINUTE_OF_DAY: ChronoField;
    static MINUTE_OF_HOUR: ChronoField;
    static MONTH_OF_YEAR: ChronoField;
    static NANO_OF_DAY: ChronoField;
    static NANO_OF_SECOND: ChronoField;
    static OFFSET_SECONDS: ChronoField;
    static PROLEPTIC_MONTH: ChronoField;
    static SECOND_OF_DAY: ChronoField;
    static SECOND_OF_MINUTE: ChronoField;
    static YEAR: ChronoField;
    static YEAR_OF_ERA: ChronoField;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ChronoField;
    static values(): ChronoField[];
    private constructor(arg2: string, arg3: TemporalUnit, arg4: TemporalUnit, arg5: ValueRange)
    private constructor(arg2: string, arg3: TemporalUnit, arg4: TemporalUnit, arg5: ValueRange, arg6: string)
    readonly baseUnit: TemporalUnit;
    // private displayNameKey: string;
    // private name: string;
    // private range: ValueRange;
    readonly rangeUnit: TemporalUnit;
    adjustInto<R extends Temporal>(arg0: R, arg1: number): R;
    checkValidIntValue(arg0: number): number;
    checkValidValue(arg0: number): number;
    getBaseUnit(): TemporalUnit;
    getDisplayName(arg0: Locale): string;
    getFrom(arg0: TemporalAccessor): number;
    getRangeUnit(): TemporalUnit;
    isDateBased(): boolean;
    isSupportedBy(arg0: TemporalAccessor): boolean;
    isTimeBased(): boolean;
    range(): ValueRange;
    rangeRefinedBy(arg0: TemporalAccessor): ValueRange;
    resolve(arg0: Map<TemporalField, number>, arg1: TemporalAccessor, arg2: ResolverStyle): TemporalAccessor;
    toString(): string;
    name(): "NANO_OF_SECOND" | "NANO_OF_DAY" | "MICRO_OF_SECOND" | "MICRO_OF_DAY" | "MILLI_OF_SECOND" | "MILLI_OF_DAY" | "SECOND_OF_MINUTE" | "SECOND_OF_DAY" | "MINUTE_OF_HOUR" | "MINUTE_OF_DAY" | "HOUR_OF_AMPM" | "CLOCK_HOUR_OF_AMPM" | "HOUR_OF_DAY" | "CLOCK_HOUR_OF_DAY" | "AMPM_OF_DAY" | "DAY_OF_WEEK" | "ALIGNED_DAY_OF_WEEK_IN_MONTH" | "ALIGNED_DAY_OF_WEEK_IN_YEAR" | "DAY_OF_MONTH" | "DAY_OF_YEAR" | "EPOCH_DAY" | "ALIGNED_WEEK_OF_MONTH" | "ALIGNED_WEEK_OF_YEAR" | "MONTH_OF_YEAR" | "PROLEPTIC_MONTH" | "YEAR_OF_ERA" | "YEAR" | "ERA" | "INSTANT_SECONDS" | "OFFSET_SECONDS";
}