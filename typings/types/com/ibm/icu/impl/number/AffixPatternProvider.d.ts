import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface AffixPatternProvider extends Object{
    charAt(arg0: number, arg1: number): string;
    containsSymbolType(arg0: number): boolean;
    currencyAsDecimal(): boolean;
    getString(arg0: number): string;
    hasBody(): boolean;
    hasCurrencySign(): boolean;
    hasNegativeSubpattern(): boolean;
    length(arg0: number): number;
    negativeHasMinusSign(): boolean;
    positiveHasPlusSign(): boolean;
}