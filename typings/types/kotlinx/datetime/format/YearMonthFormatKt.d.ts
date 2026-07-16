import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export class YearMonthFormatKt extends Object {
    static getISO_YEAR_MONTH(): DateTimeFormat<YearMonth>;
    static requireParsedField<T extends unknown>(field: T | null, name: string): T;
    static yearOfEra(self: DateTimeFormatBuilder$WithYearMonth, padding: Padding): void;
    static yearOfEraTwoDigits(self: DateTimeFormatBuilder$WithYearMonth, baseYear: number): void;
}