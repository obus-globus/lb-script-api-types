import type { Class } from '../../java/lang/Class.d.ts'
import type { TextStyle } from '../../java/time/format/TextStyle.d.ts'
import type { Temporal } from '../../java/time/temporal/Temporal.d.ts'
import type { TemporalAccessor } from '../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalAdjuster } from '../../java/time/temporal/TemporalAdjuster.d.ts'
import type { TemporalField } from '../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../java/time/temporal/TemporalQuery.d.ts'
import type { ValueRange } from '../../java/time/temporal/ValueRange.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class DayOfWeek extends Enum<DayOfWeek> implements TemporalAccessor, TemporalAdjuster {
    static FRIDAY: DayOfWeek;
    static MONDAY: DayOfWeek;
    static SATURDAY: DayOfWeek;
    static SUNDAY: DayOfWeek;
    static THURSDAY: DayOfWeek;
    static TUESDAY: DayOfWeek;
    static WEDNESDAY: DayOfWeek;
    static from(paramarg0: TemporalAccessor): DayOfWeek;
    static of(paramarg0: number): DayOfWeek;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DayOfWeek;
    static values(): (Object | null)[];
    private constructor()
    adjustInto(arg0: Temporal): Temporal;
    get(arg0: TemporalField): number;
    get(arg0: TemporalField): number;
    getDisplayName(arg0: TextStyle, arg1: Locale): string;
    getLong(arg0: TemporalField): number;
    getValue(): number;
    isSupported(arg0: TemporalField): boolean;
    minus(arg0: number): DayOfWeek;
    plus(arg0: number): DayOfWeek;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    range(arg0: TemporalField): ValueRange;
    name(): "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
}