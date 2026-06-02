import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export class YearMonthFormatKt extends Object {
    static getISO_YEAR_MONTH(): DateTimeFormat<YearMonth>;
    static requireParsedField(paramarg0: Object | null, paramarg1: string): Object | null;
    static yearOfEra(paramarg0: DateTimeFormatBuilder$WithYearMonth, paramarg1: Padding): void;
    static yearOfEraTwoDigits(paramarg0: DateTimeFormatBuilder$WithYearMonth, paramarg1: number): void;
}