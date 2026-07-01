import type { CurrencyData$CurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { NumberingSystem } from '../../../../com/ibm/icu/text/NumberingSystem.d.ts'
import type { Currency } from '../../../../com/ibm/icu/util/Currency.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
export class DecimalFormatSymbols extends Object implements Serializable, Cloneable {
    static CURRENCY_SPC_CURRENCY_MATCH: number;
    static CURRENCY_SPC_INSERT: number;
    static CURRENCY_SPC_SURROUNDING_MATCH: number;
    static forNumberingSystem(paramarg0: ULocale, paramarg1: NumberingSystem): DecimalFormatSymbols;
    static forNumberingSystem(paramarg0: Locale, paramarg1: NumberingSystem): DecimalFormatSymbols;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getInstance(): DecimalFormatSymbols;
    static getInstance(paramarg0: ULocale): DecimalFormatSymbols;
    static getInstance(paramarg0: Locale): DecimalFormatSymbols;
    constructor()
    constructor(arg0: ULocale)
    constructor(arg0: Locale)
    // private NaN: string;
    // private actualLocale: ULocale;
    // private approximatelyString: string;
    readonly codePointZero: number;
    readonly currency: Currency;
    readonly currencyPattern: string;
    // private currencySpcAfterSym: string[];
    // private currencySpcBeforeSym: string[];
    readonly currencySymbol: string;
    readonly decimalSeparator: string;
    readonly decimalSeparatorString: string;
    readonly digit: string;
    readonly digitStrings: string[];
    readonly digits: string[];
    readonly exponentMultiplicationSign: string;
    readonly exponentSeparator: string;
    // private exponential: string;
    readonly groupingSeparator: string;
    readonly groupingSeparatorString: string;
    readonly infinity: string;
    // private intlCurrencySymbol: string;
    readonly minusSign: string;
    // private minusString: string;
    readonly monetaryGroupingSeparator: string;
    readonly monetaryGroupingSeparatorString: string;
    // private monetarySeparator: string;
    // private monetarySeparatorString: string;
    readonly padEscape: string;
    readonly patternSeparator: string;
    readonly perMill: string;
    readonly perMillString: string;
    readonly percent: string;
    readonly percentString: string;
    readonly plusSign: string;
    // private plusString: string;
    // private requestedLocale: Locale;
    // private serialVersionOnStream: number;
    // private sigDigit: string;
    // private ulocale: ULocale;
    // private validLocale: ULocale;
    readonly zeroDigit: string;
    clone(): DecimalFormatSymbols;
    equals(arg0: Object | null): boolean;
    getApproximatelySignString(): string;
    getCodePointZero(): number;
    getCurrency(): Currency;
    getCurrencyPattern(): string;
    getCurrencySymbol(): string;
    getDecimalSeparator(): string;
    getDecimalSeparatorString(): string;
    getDigit(): string;
    getDigitStrings(): string[];
    getDigitStringsLocal(): string[];
    getDigits(): string[];
    getExponentMultiplicationSign(): string;
    getExponentSeparator(): string;
    getGroupingSeparator(): string;
    getGroupingSeparatorString(): string;
    getInfinity(): string;
    getInternationalCurrencySymbol(): string;
    getLocale(): Locale;
    getLocale(arg0: ULocale$Type): ULocale;
    getMinusSign(): string;
    getMinusSignString(): string;
    getMonetaryDecimalSeparator(): string;
    getMonetaryDecimalSeparatorString(): string;
    getMonetaryGroupingSeparator(): string;
    getMonetaryGroupingSeparatorString(): string;
    getNaN(): string;
    getPadEscape(): string;
    getPatternForCurrencySpacing(arg0: number, arg1: boolean): string;
    getPatternSeparator(): string;
    getPerMill(): string;
    getPerMillString(): string;
    getPercent(): string;
    getPercentString(): string;
    getPlusSign(): string;
    getPlusSignString(): string;
    getSignificantDigit(): string;
    getULocale(): ULocale;
    getZeroDigit(): string;
    hashCode(): number;
    // private initSpacingInfo(arg0: CurrencyData$CurrencySpacingInfo): void;
    // private initialize(arg0: ULocale, arg1: NumberingSystem): void;
    // private readObject(arg0: ObjectInputStream): void;
    setApproximatelySignString(arg0: string): void;
    setCurrency(arg0: Currency): void;
    // private setCurrencyOrNull(arg0: Currency, arg1: CurrencyData$CurrencyDisplayInfo): void;
    setCurrencySymbol(arg0: string): void;
    setDecimalSeparator(arg0: string): void;
    setDecimalSeparatorString(arg0: string): void;
    setDigit(arg0: string): void;
    setDigitStrings(arg0: string[]): void;
    setExponentMultiplicationSign(arg0: string): void;
    setExponentSeparator(arg0: string): void;
    setGroupingSeparator(arg0: string): void;
    setGroupingSeparatorString(arg0: string): void;
    setInfinity(arg0: string): void;
    setInternationalCurrencySymbol(arg0: string): void;
    setLocale(arg0: ULocale, arg1: ULocale): void;
    setMinusSign(arg0: string): void;
    setMinusSignString(arg0: string): void;
    setMonetaryDecimalSeparator(arg0: string): void;
    setMonetaryDecimalSeparatorString(arg0: string): void;
    setMonetaryGroupingSeparator(arg0: string): void;
    setMonetaryGroupingSeparatorString(arg0: string): void;
    setNaN(arg0: string): void;
    setPadEscape(arg0: string): void;
    setPatternForCurrencySpacing(arg0: number, arg1: boolean, arg2: string): void;
    setPatternSeparator(arg0: string): void;
    setPerMill(arg0: string): void;
    setPerMillString(arg0: string): void;
    setPercent(arg0: string): void;
    setPercentString(arg0: string): void;
    setPlusSign(arg0: string): void;
    setPlusSignString(arg0: string): void;
    setSignificantDigit(arg0: string): void;
    setZeroDigit(arg0: string): void;
}