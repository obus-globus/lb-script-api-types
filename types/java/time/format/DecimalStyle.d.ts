import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DecimalStyle extends Object {
    static STANDARD: DecimalStyle;
    static getAvailableLocales(): Locale[];
    static of(paramarg0: Locale): DecimalStyle;
    static ofDefaultLocale(): DecimalStyle;
    private constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    readonly decimalSeparator: string;
    readonly negativeSign: string;
    readonly positiveSign: string;
    readonly zeroDigit: string;
    convertNumberToI18N(arg0: string): string;
    convertToDigit(arg0: string): number;
    equals(arg0: Object | null): boolean;
    getDecimalSeparator(): string;
    getNegativeSign(): string;
    getPositiveSign(): string;
    getZeroDigit(): string;
    hashCode(): number;
    toString(): string;
    withDecimalSeparator(arg0: string): DecimalStyle;
    withNegativeSign(arg0: string): DecimalStyle;
    withPositiveSign(arg0: string): DecimalStyle;
    withZeroDigit(arg0: string): DecimalStyle;
}