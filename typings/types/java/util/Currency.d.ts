import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Currency extends Object implements Serializable {
    static availableCurrencies(): Stream<Currency>;
    static getAvailableCurrencies(): Currency[];
    static getInstance(paramarg0: string): Currency;
    static getInstance(paramarg0: Locale): Currency;
    private constructor(arg0: string, arg1: number, arg2: number)
    readonly currencyCode: string;
    readonly defaultFractionDigits: number;
    readonly numericCode: number;
    getCurrencyCode(): string;
    getDefaultFractionDigits(): number;
    getDisplayName(): string;
    getDisplayName(arg0: Locale): string;
    getNumericCode(): number;
    getNumericCodeAsString(): string;
    getSymbol(): string;
    getSymbol(arg0: Locale): string;
    // private readResolve(): Object;
    toString(): string;
}