import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CurrencyData$CurrencySpacingInfo$SpacingPattern } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo$SpacingPattern.d.ts'
import type { CurrencyData$CurrencySpacingInfo$SpacingType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo$SpacingType.d.ts'
export class CurrencyData$CurrencySpacingInfo extends Object {
    static DEFAULT: CurrencyData$CurrencySpacingInfo;
    constructor()
    constructor(strings: string[])
    hasAfterCurrency: boolean;
    hasBeforeCurrency: boolean;
    // private symbols: string[][];
    getAfterSymbols(): string[];
    getBeforeSymbols(): string[];
    setSymbolIfNull(type: CurrencyData$CurrencySpacingInfo$SpacingType, pattern: CurrencyData$CurrencySpacingInfo$SpacingPattern, value: string): void;
}