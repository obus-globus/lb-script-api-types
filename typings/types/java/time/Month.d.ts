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
export class Month extends Enum<Month> implements TemporalAccessor, TemporalAdjuster {
    static APRIL: Month;
    static AUGUST: Month;
    static DECEMBER: Month;
    static FEBRUARY: Month;
    static JANUARY: Month;
    static JULY: Month;
    static JUNE: Month;
    static MARCH: Month;
    static MAY: Month;
    static NOVEMBER: Month;
    static OCTOBER: Month;
    static SEPTEMBER: Month;
    static from(paramarg0: TemporalAccessor): Month;
    static of(paramarg0: number): Month;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Month;
    static values(): (Object | null)[];
    private constructor()
    adjustInto(arg0: Temporal): Temporal;
    firstDayOfYear(arg0: boolean): number;
    firstMonthOfQuarter(): Month;
    get(arg0: TemporalField): number;
    getDisplayName(arg0: TextStyle, arg1: Locale): string;
    getLong(arg0: TemporalField): number;
    getValue(): number;
    isSupported(arg0: TemporalField): boolean;
    length(arg0: boolean): number;
    maxLength(): number;
    minLength(): number;
    minus(arg0: number): Month;
    plus(arg0: number): Month;
    query<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    range(arg0: TemporalField): ValueRange;
    name(): "JANUARY" | "FEBRUARY" | "MARCH" | "APRIL" | "MAY" | "JUNE" | "JULY" | "AUGUST" | "SEPTEMBER" | "OCTOBER" | "NOVEMBER" | "DECEMBER";
}