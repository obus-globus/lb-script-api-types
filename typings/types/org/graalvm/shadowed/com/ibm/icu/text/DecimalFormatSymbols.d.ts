import type { ObjectInputStream } from '../../../../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { CurrencyData$CurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { NumberingSystem } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberingSystem.d.ts'
import type { Currency } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Currency.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
export class DecimalFormatSymbols extends Object implements Serializable, Cloneable {
    static CURRENCY_SPC_CURRENCY_MATCH: number;
    static CURRENCY_SPC_INSERT: number;
    static CURRENCY_SPC_SURROUNDING_MATCH: number;
    static forNumberingSystem(paramlocale: Locale, paramns: NumberingSystem): DecimalFormatSymbols;
    static forNumberingSystem(paramlocale: ULocale, paramns: NumberingSystem): DecimalFormatSymbols;
    static getAvailableLocales(): Locale[];
    static getAvailableULocales(): ULocale[];
    static getInstance(): DecimalFormatSymbols;
    static getInstance(paramlocale: Locale): DecimalFormatSymbols;
    static getInstance(paramlocale: ULocale): DecimalFormatSymbols;
    constructor()
    constructor(locale: Locale)
    constructor(locale: ULocale)
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
    clone(): Object;
    equals(obj: Object | null): boolean;
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
    getLocale(type: ULocale$Type): ULocale;
    getMinusSign(): string;
    getMinusSignString(): string;
    getMonetaryDecimalSeparator(): string;
    getMonetaryDecimalSeparatorString(): string;
    getMonetaryGroupingSeparator(): string;
    getMonetaryGroupingSeparatorString(): string;
    getNaN(): string;
    getPadEscape(): string;
    getPatternForCurrencySpacing(itemType: number, beforeCurrency: boolean): string;
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
    // private initSpacingInfo(spcInfo: CurrencyData$CurrencySpacingInfo): void;
    // private initialize(locale: ULocale, ns: NumberingSystem): void;
    // private readObject(stream: ObjectInputStream): void;
    setApproximatelySignString(approximatelySignString: string): void;
    setCurrency(currency: Currency): void;
    // private setCurrencyOrNull(currency: Currency, displayInfo: CurrencyData$CurrencyDisplayInfo): void;
    setCurrencySymbol(currency: string): void;
    setDecimalSeparator(decimalSeparator: string): void;
    setDecimalSeparatorString(decimalSeparatorString: string): void;
    setDigit(digit: string): void;
    setDigitStrings(digitStrings: string[]): void;
    setExponentMultiplicationSign(exponentMultiplicationSign: string): void;
    setExponentSeparator(exp: string): void;
    setGroupingSeparator(groupingSeparator: string): void;
    setGroupingSeparatorString(groupingSeparatorString: string): void;
    setInfinity(infinity: string): void;
    setInternationalCurrencySymbol(currency: string): void;
    setLocale(valid: ULocale, actual: ULocale): void;
    setMinusSign(minusSign: string): void;
    setMinusSignString(minusSignString: string): void;
    setMonetaryDecimalSeparator(sep: string): void;
    setMonetaryDecimalSeparatorString(sep: string): void;
    setMonetaryGroupingSeparator(sep: string): void;
    setMonetaryGroupingSeparatorString(sep: string): void;
    setNaN(NaN: string): void;
    setPadEscape(c: string): void;
    setPatternForCurrencySpacing(itemType: number, beforeCurrency: boolean, pattern: string): void;
    setPatternSeparator(patternSeparator: string): void;
    setPerMill(perMill: string): void;
    setPerMillString(perMillString: string): void;
    setPercent(percent: string): void;
    setPercentString(percentString: string): void;
    setPlusSign(plus: string): void;
    setPlusSignString(plusSignString: string): void;
    setSignificantDigit(sigDigit: string): void;
    setZeroDigit(zeroDigit: string): void;
}