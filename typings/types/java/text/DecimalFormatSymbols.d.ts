import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Currency } from '../../java/util/Currency.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class DecimalFormatSymbols extends Object implements Serializable, Cloneable {
    static getAvailableLocales(): Locale[];
    static getInstance(): DecimalFormatSymbols;
    static getInstance(paramarg0: Locale): DecimalFormatSymbols;
    constructor()
    constructor(arg0: Locale)
    // private NaN: string;
    readonly currency: Currency;
    // private currencyInitialized: boolean;
    readonly currencySymbol: string;
    readonly decimalSeparator: string;
    readonly digit: string;
    // private exponential: string;
    // private exponentialSeparator: string;
    readonly groupingSeparator: string;
    // private hashCode: number;
    readonly infinity: string;
    // private intlCurrencySymbol: string;
    readonly locale: Locale;
    readonly minusSign: string;
    // private minusSignText: string;
    readonly monetaryGroupingSeparator: string;
    // private monetarySeparator: string;
    readonly patternSeparator: string;
    readonly perMill: string;
    // private perMillText: string;
    readonly percent: string;
    // private percentText: string;
    // private serialVersionOnStream: number;
    readonly zeroDigit: string;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    // private findNonFormatChar(arg0: string, arg1: string): string;
    getCurrency(): Currency;
    getCurrencySymbol(): string;
    getDecimalSeparator(): string;
    getDigit(): string;
    getExponentSeparator(): string;
    getExponentialSymbol(): string;
    getGroupingSeparator(): string;
    getInfinity(): string;
    getInternationalCurrencySymbol(): string;
    getLocale(): Locale;
    getMinusSign(): string;
    getMinusSignText(): string;
    getMonetaryDecimalSeparator(): string;
    getMonetaryGroupingSeparator(): string;
    getNaN(): string;
    getPatternSeparator(): string;
    getPerMill(): string;
    getPerMillText(): string;
    getPercent(): string;
    getPercentText(): string;
    getZeroDigit(): string;
    hashCode(): number;
    // private initialize(arg0: Locale): void;
    // private initializeCurrency(arg0: Locale): void;
    // private readObject(arg0: ObjectInputStream): void;
    setCurrency(arg0: Currency): void;
    setCurrencySymbol(arg0: string): void;
    setDecimalSeparator(arg0: string): void;
    setDigit(arg0: string): void;
    setExponentSeparator(arg0: string): void;
    setExponentialSymbol(arg0: string): void;
    setGroupingSeparator(arg0: string): void;
    setInfinity(arg0: string): void;
    setInternationalCurrencySymbol(arg0: string): void;
    setMinusSign(arg0: string): void;
    setMinusSignText(arg0: string): void;
    setMonetaryDecimalSeparator(arg0: string): void;
    setMonetaryGroupingSeparator(arg0: string): void;
    setNaN(arg0: string): void;
    setPatternSeparator(arg0: string): void;
    setPerMill(arg0: string): void;
    setPerMillText(arg0: string): void;
    setPercent(arg0: string): void;
    setPercentText(arg0: string): void;
    setZeroDigit(arg0: string): void;
}