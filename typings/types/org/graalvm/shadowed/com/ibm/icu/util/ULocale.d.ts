import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { BaseLocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/BaseLocale.d.ts'
import type { LocaleExtensions } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LocaleExtensions.d.ts'
import type { ULocale$AvailableType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { ULocale$Category } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Category.d.ts'
import type { ULocale$Minimize } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Minimize.d.ts'
import type { ULocale$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$Type.d.ts'
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
    static acceptLanguage(paramacceptLanguageList: string, paramfallback: (Object | null)[]): ULocale;
    static acceptLanguage(paramacceptLanguageList: string, paramavailableLocales: (Object | null)[], paramfallback: (Object | null)[]): ULocale;
    static acceptLanguage(paramacceptLanguageList: (Object | null)[], paramfallback: (Object | null)[]): ULocale;
    static acceptLanguage(paramacceptLanguageList: (Object | null)[], paramavailableLocales: (Object | null)[], paramfallback: (Object | null)[]): ULocale;
    static addLikelySubtags(paramloc: ULocale): ULocale;
    static canonicalize(paramlocaleID: string): string;
    static createCanonical(paramnonCanonicalID: string): ULocale;
    static createCanonical(paramlocale: ULocale): ULocale;
    static forLanguageTag(paramlanguageTag: string): ULocale;
    static forLocale(paramloc: Locale): ULocale;
    static getAvailableLocales(): (Object | null)[];
    static getAvailableLocalesByType(paramtype: ULocale$AvailableType): E[];
    static getBaseName(paramlocaleID: string): string;
    static getCountry(paramlocaleID: string): string;
    static getDefault(): ULocale;
    static getDefault(paramcategory: ULocale$Category): ULocale;
    static getDisplayCountry(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayCountry(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayKeyword(paramkeyword: string): string;
    static getDisplayKeyword(paramkeyword: string, paramdisplayLocaleID: string): string;
    static getDisplayKeyword(paramkeyword: string, paramdisplayLocale: ULocale): string;
    static getDisplayKeywordValue(paramlocaleID: string, paramkeyword: string, paramdisplayLocaleID: string): string;
    static getDisplayKeywordValue(paramlocaleID: string, paramkeyword: string, paramdisplayLocale: ULocale): string;
    static getDisplayLanguage(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayLanguage(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayLanguageWithDialect(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayLanguageWithDialect(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayName(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayName(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayNameWithDialect(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayNameWithDialect(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayScript(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayScript(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayScriptInContext(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayScriptInContext(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getDisplayVariant(paramlocaleID: string, paramdisplayLocaleID: string): string;
    static getDisplayVariant(paramlocaleID: string, paramdisplayLocale: ULocale): string;
    static getFallback(paramlocaleID: string): string;
    static getISO3Country(paramlocaleID: string): string;
    static getISO3Language(paramlocaleID: string): string;
    static getISOCountries(): (Object | null)[];
    static getISOLanguages(): (Object | null)[];
    static getKeywordValue(paramlocaleID: string, paramkeywordName: string): string;
    static getKeywords(paramlocaleID: string): Iterator<string>;
    static getLanguage(paramlocaleID: string): string;
    static getName(paramlocaleID: string): string;
    static getRegionForSupplementalData(paramlocale: ULocale, paraminferRegion: boolean): string;
    static getScript(paramlocaleID: string): string;
    static getVariant(paramlocaleID: string): string;
    static minimizeSubtags(paramloc: ULocale): ULocale;
    static minimizeSubtags(paramloc: ULocale, paramfieldToFavor: ULocale$Minimize): ULocale;
    static setDefault(paramcategory: ULocale$Category, paramnewLocale: ULocale): void;
    static setDefault(paramnewLocale: ULocale): void;
    static setKeywordValue(paramlocaleID: string, paramkeyword: string, paramvalue: string): string;
    static toLegacyKey(paramkeyword: string): string;
    static toLegacyType(paramkeyword: string, paramvalue: string): string;
    static toUnicodeLocaleKey(paramkeyword: string): string;
    static toUnicodeLocaleType(paramkeyword: string, paramvalue: string): string;
    constructor(localeID: string)
    private constructor(localeID: string, locale: Locale)
    constructor(a: string, b: string)
    constructor(a: string, b: string, c: string)
    // private baseLocale: BaseLocale;
    // private extensions: LocaleExtensions;
    // private locale: Locale;
    // private localeID: string;
    // private base(): BaseLocale;
    clone(): Object;
    compareTo(other: ULocale): number;
    equals(obj: Object | null): boolean;
    // private extensions(): LocaleExtensions;
    getBaseName(): string;
    getCharacterOrientation(): string;
    getCountry(): string;
    getDisplayCountry(): string;
    getDisplayCountry(displayLocale: ULocale): string;
    getDisplayKeywordValue(keyword: string): string;
    getDisplayKeywordValue(keyword: string, displayLocale: ULocale): string;
    getDisplayLanguage(): string;
    getDisplayLanguage(displayLocale: ULocale): string;
    getDisplayLanguageWithDialect(): string;
    getDisplayLanguageWithDialect(displayLocale: ULocale): string;
    getDisplayName(): string;
    getDisplayName(displayLocale: ULocale): string;
    getDisplayNameWithDialect(): string;
    getDisplayNameWithDialect(displayLocale: ULocale): string;
    getDisplayScript(): string;
    getDisplayScript(displayLocale: ULocale): string;
    getDisplayScriptInContext(): string;
    getDisplayScriptInContext(displayLocale: ULocale): string;
    getDisplayVariant(): string;
    getDisplayVariant(displayLocale: ULocale): string;
    getExtension(key: string): string;
    getExtensionKeys(): string[];
    getFallback(): ULocale;
    getISO3Country(): string;
    getISO3Language(): string;
    getKeywordValue(keywordName: string): string;
    getKeywords(): Iterator<string>;
    getLanguage(): string;
    getLineOrientation(): string;
    getName(): string;
    getScript(): string;
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(key: string): string;
    getVariant(): string;
    hashCode(): number;
    isRightToLeft(): boolean;
    setKeywordValue(keyword: string, value: string): ULocale;
    toLanguageTag(): string;
    toLocale(): Locale;
    toString(): string;
}