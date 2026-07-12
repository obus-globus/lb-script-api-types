import type { CurrencyData$CurrencySpacingInfo$SpacingPattern } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo$SpacingPattern.d.ts'
import type { CurrencyData$CurrencySpacingInfo$SpacingType } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo$SpacingType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CurrencyData$CurrencySpacingInfo extends Object {
    static DEFAULT: CurrencyData$CurrencySpacingInfo;
    constructor()
    constructor(...arg0: string[])
    hasAfterCurrency: boolean;
    hasBeforeCurrency: boolean;
    // private symbols: string[][];
    getAfterSymbols(): string[];
    getBeforeSymbols(): string[];
    setSymbolIfNull(arg0: CurrencyData$CurrencySpacingInfo$SpacingType, arg1: CurrencyData$CurrencySpacingInfo$SpacingPattern, arg2: string): void;
}