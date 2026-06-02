import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface AffixPatternProvider extends Object{
    charAt(flags: number, i: number): string;
    containsSymbolType(type: number): boolean;
    currencyAsDecimal(): boolean;
    getString(flags: number): string;
    hasBody(): boolean;
    hasCurrencySign(): boolean;
    hasNegativeSubpattern(): boolean;
    length(flags: number): number;
    negativeHasMinusSign(): boolean;
    positiveHasPlusSign(): boolean;
}