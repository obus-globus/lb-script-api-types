import type { BaseLocale } from '../../../../com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { LocaleExtensions } from '../../../../com/ibm/icu/impl/locale/LocaleExtensions.d.ts'
import type { ULocale$AvailableType } from '../../../../com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { ULocale$Category } from '../../../../com/ibm/icu/util/ULocale$Category.d.ts'
import type { ULocale$Minimize } from '../../../../com/ibm/icu/util/ULocale$Minimize.d.ts'
import type { ULocale$Type } from '../../../../com/ibm/icu/util/ULocale$Type.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ULocale extends Object implements Serializable, Comparable<ULocale> {
    static ACTUAL_LOCALE: ULocale$Type;
    static CANADA: ULocale;
    static CANADA_FRENCH: ULocale;
    static CHINA: ULocale;
    static CHINESE: ULocale;
    static ENGLISH: ULocale;
    static FRANCE: ULocale;
    static FRENCH: ULocale;
    static GERMAN: ULocale;
    static GERMANY: ULocale;
    static ITALIAN: ULocale;
    static ITALY: ULocale;
    static JAPAN: ULocale;
    static JAPANESE: ULocale;
    static KOREA: ULocale;
    static KOREAN: ULocale;
    static PRC: ULocale;
    static PRIVATE_USE_EXTENSION: string;
    static ROOT: ULocale;
    static SIMPLIFIED_CHINESE: ULocale;
    static TAIWAN: ULocale;
    static TRADITIONAL_CHINESE: ULocale;
    static UK: ULocale;
    static UNICODE_LOCALE_EXTENSION: string;
    static US: ULocale;
    static VALID_LOCALE: ULocale$Type;
    static acceptLanguage(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): ULocale;
    static acceptLanguage(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: (Object | null)[]): ULocale;
    static acceptLanguage(paramarg0: string, paramarg1: (Object | null)[]): ULocale;
    static acceptLanguage(paramarg0: string, paramarg1: (Object | null)[], paramarg2: (Object | null)[]): ULocale;
    static addLikelySubtags(paramarg0: ULocale): ULocale;
    static canonicalize(paramarg0: string): string;
    static createCanonical(paramarg0: ULocale): ULocale;
    static createCanonical(paramarg0: string): ULocale;
    static forLanguageTag(paramarg0: string): ULocale;
    static forLocale(paramarg0: Locale): ULocale;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableLocalesByType(paramarg0: ULocale$AvailableType): E[];
    static getBaseName(paramarg0: string): string;
    static getCountry(paramarg0: string): string;
    static getDefault(): ULocale;
    static getDefault(paramarg0: ULocale$Category): ULocale;
    static getDisplayCountry(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayCountry(paramarg0: string, paramarg1: string): string;
    static getDisplayKeyword(paramarg0: string): string;
    static getDisplayKeyword(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayKeyword(paramarg0: string, paramarg1: string): string;
    static getDisplayKeywordValue(paramarg0: string, paramarg1: string, paramarg2: ULocale): string;
    static getDisplayKeywordValue(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static getDisplayLanguage(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayLanguage(paramarg0: string, paramarg1: string): string;
    static getDisplayLanguageWithDialect(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayLanguageWithDialect(paramarg0: string, paramarg1: string): string;
    static getDisplayName(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayName(paramarg0: string, paramarg1: string): string;
    static getDisplayNameWithDialect(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayNameWithDialect(paramarg0: string, paramarg1: string): string;
    static getDisplayScript(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayScript(paramarg0: string, paramarg1: string): string;
    static getDisplayScriptInContext(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayScriptInContext(paramarg0: string, paramarg1: string): string;
    static getDisplayVariant(paramarg0: string, paramarg1: ULocale): string;
    static getDisplayVariant(paramarg0: string, paramarg1: string): string;
    static getFallback(paramarg0: string): string;
    static getISO3Country(paramarg0: string): string;
    static getISO3Language(paramarg0: string): string;
    static getISOCountries(): (Object | null)[];
    static getISOLanguages(): (Object | null)[];
    static getKeywordValue(paramarg0: string, paramarg1: string): string;
    static getKeywords(paramarg0: string): Iterator<string>;
    static getLanguage(paramarg0: string): string;
    static getName(paramarg0: string): string;
    static getRegionForSupplementalData(paramarg0: ULocale, paramarg1: boolean): string;
    static getScript(paramarg0: string): string;
    static getVariant(paramarg0: string): string;
    static minimizeSubtags(paramarg0: ULocale): ULocale;
    static minimizeSubtags(paramarg0: ULocale, paramarg1: ULocale$Minimize): ULocale;
    static setDefault(paramarg0: ULocale$Category, paramarg1: ULocale): void;
    static setDefault(paramarg0: ULocale): void;
    static setKeywordValue(paramarg0: string, paramarg1: string, paramarg2: string): string;
    static toLegacyKey(paramarg0: string): string;
    static toLegacyType(paramarg0: string, paramarg1: string): string;
    static toUnicodeLocaleKey(paramarg0: string): string;
    static toUnicodeLocaleType(paramarg0: string, paramarg1: string): string;
    constructor(arg0: string)
    private constructor(arg0: string, arg1: Locale)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    // private baseLocale: BaseLocale;
    // private extensions: LocaleExtensions;
    // private locale: Locale;
    // private localeID: string;
    // private base(): BaseLocale;
    clone(): Object;
    compareTo(arg0: ULocale): number;
    equals(arg0: Object | null): boolean;
    // private extensions(): LocaleExtensions;
    getBaseName(): string;
    getCharacterOrientation(): string;
    getCountry(): string;
    getDisplayCountry(): string;
    getDisplayCountry(arg0: ULocale): string;
    getDisplayKeywordValue(arg0: string): string;
    getDisplayKeywordValue(arg0: string, arg1: ULocale): string;
    getDisplayLanguage(): string;
    getDisplayLanguage(arg0: ULocale): string;
    getDisplayLanguageWithDialect(): string;
    getDisplayLanguageWithDialect(arg0: ULocale): string;
    getDisplayName(): string;
    getDisplayName(arg0: ULocale): string;
    getDisplayNameWithDialect(): string;
    getDisplayNameWithDialect(arg0: ULocale): string;
    getDisplayScript(): string;
    getDisplayScript(arg0: ULocale): string;
    getDisplayScriptInContext(): string;
    getDisplayScriptInContext(arg0: ULocale): string;
    getDisplayVariant(): string;
    getDisplayVariant(arg0: ULocale): string;
    getExtension(arg0: string): string;
    getExtensionKeys(): string[];
    getFallback(): ULocale;
    getISO3Country(): string;
    getISO3Language(): string;
    getKeywordValue(arg0: string): string;
    getKeywords(): Iterator<string>;
    getLanguage(): string;
    getLineOrientation(): string;
    getName(): string;
    getScript(): string;
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(arg0: string): string;
    getVariant(): string;
    hashCode(): number;
    isRightToLeft(): boolean;
    setKeywordValue(arg0: string, arg1: string): ULocale;
    toLanguageTag(): string;
    toLocale(): Locale;
    toString(): string;
}