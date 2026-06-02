import type { DateTimeFormatter } from '../../../java/time/format/DateTimeFormatter.d.ts'
import type { DecimalStyle } from '../../../java/time/format/DecimalStyle.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { TemporalField } from '../../../java/time/temporal/TemporalField.d.ts'
import type { TemporalQuery } from '../../../java/time/temporal/TemporalQuery.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DateTimePrintContext extends Object {
    constructor(arg0: TemporalAccessor, arg1: DateTimeFormatter)
    // private formatter: DateTimeFormatter;
    // private optional: number;
    // private temporal: TemporalAccessor;
    endOptional(): void;
    getDecimalStyle(): DecimalStyle;
    getLocale(): Locale;
    getTemporal(): TemporalAccessor;
    getValue(arg0: TemporalField): number;
    getValue<R extends Object | number | string | boolean>(arg0: (param0: R) => unknown): R;
    startOptional(): void;
    toString(): string;
}