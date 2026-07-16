import type { Object } from '../../../java/lang/Object.d.ts'
export class UtilKt extends Object {
    static asciiDigitToInt(self: string): number;
    static isAsciiDigit(self: string): boolean;
    static isAsciiLetter(self: string): boolean;
    static removeLeadingZerosFromLongYearFormIsoWeekDate(input: string): string;
    static removeLeadingZerosFromLongYearFormLocalDate(input: string): string;
    static removeLeadingZerosFromLongYearFormLocalDateTime(input: string): string;
    static removeLeadingZerosFromLongYearFormYearMonth(input: string): string;
}