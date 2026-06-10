import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Locale$Category } from '../../java/util/Locale$Category.d.ts'
import type { Locale$FilteringMode } from '../../java/util/Locale$FilteringMode.d.ts'
import type { Locale$IsoCountryCode } from '../../java/util/Locale$IsoCountryCode.d.ts'
import type { Locale$LanguageRange } from '../../java/util/Locale$LanguageRange.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { BaseLocale } from '../../sun/util/locale/BaseLocale.d.ts'
import type { LocaleExtensions } from '../../sun/util/locale/LocaleExtensions.d.ts'
import type { LocaleResources } from '../../sun/util/locale/provider/LocaleResources.d.ts'
export class Locale extends Object implements Serializable, Cloneable {
    static CANADA: Locale;
    static CANADA_FRENCH: Locale;
    static CHINA: Locale;
    static CHINESE: Locale;
    static ENGLISH: Locale;
    static FRANCE: Locale;
    static FRENCH: Locale;
    static GERMAN: Locale;
    static GERMANY: Locale;
    static ITALIAN: Locale;
    static ITALY: Locale;
    static JAPAN: Locale;
    static JAPANESE: Locale;
    static KOREA: Locale;
    static KOREAN: Locale;
    static PRC: Locale;
    static PRIVATE_USE_EXTENSION: string;
    static ROOT: Locale;
    static SIMPLIFIED_CHINESE: Locale;
    static TAIWAN: Locale;
    static TRADITIONAL_CHINESE: Locale;
    static UK: Locale;
    static UNICODE_LOCALE_EXTENSION: string;
    static US: Locale;
    static availableLocales(): Stream<Locale>;
    static caseFoldLanguageTag(paramarg0: string): string;
    static filter(paramarg0: Locale$LanguageRange[], paramarg1: Locale[]): Locale[];
    static filter(paramarg0: Locale$LanguageRange[], paramarg1: Locale[], paramarg2: Locale$FilteringMode): Locale[];
    static filterTags(paramarg0: Locale$LanguageRange[], paramarg1: string[]): string[];
    static filterTags(paramarg0: Locale$LanguageRange[], paramarg1: string[], paramarg2: Locale$FilteringMode): string[];
    static forLanguageTag(paramarg0: string): Locale;
    static getAvailableLocales(): (Object | null)[];
    static getDefault(): Locale;
    static getDefault(paramarg0: Locale$Category): Locale;
    static getISOCountries(): (Object | null)[];
    static getISOCountries(paramarg0: Locale$IsoCountryCode): string[];
    static getISOLanguages(): (Object | null)[];
    static lookup(paramarg0: Locale$LanguageRange[], paramarg1: Locale[]): Locale;
    static lookupTag(paramarg0: Locale$LanguageRange[], paramarg1: string[]): string;
    static of(paramarg0: string): Locale;
    static of(paramarg0: string, paramarg1: string): Locale;
    static of(paramarg0: string, paramarg1: string, paramarg2: string): Locale;
    static setDefault(paramarg0: Locale$Category, paramarg1: Locale): void;
    static setDefault(paramarg0: Locale): void;
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    private constructor(arg0: BaseLocale, arg1: LocaleExtensions)
    // private baseLocale: BaseLocale;
    // private hashCodeValue: number;
    // private languageTag: string;
    // private localeExtensions: LocaleExtensions;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getBaseLocale(): BaseLocale;
    getCountry(): string;
    getDisplayCountry(): string;
    getDisplayCountry(arg0: Locale): string;
    // private getDisplayKeyTypeExtensionString(arg0: string, arg1: LocaleResources, arg2: Locale): string;
    getDisplayLanguage(): string;
    getDisplayLanguage(arg0: Locale): string;
    getDisplayName(): string;
    getDisplayName(arg0: Locale): string;
    getDisplayScript(): string;
    getDisplayScript(arg0: Locale): string;
    // private getDisplayString(arg0: string, arg1: string, arg2: Locale, arg3: number): string;
    getDisplayVariant(): string;
    getDisplayVariant(arg0: Locale): string;
    // private getDisplayVariantArray(arg0: Locale): string[];
    getExtension(arg0: string): string;
    getExtensionKeys(): string[];
    getISO3Country(): string;
    getISO3Language(): string;
    getLanguage(): string;
    getLocaleExtensions(): LocaleExtensions;
    getScript(): string;
    getUnicodeLocaleAttributes(): string[];
    getUnicodeLocaleKeys(): string[];
    getUnicodeLocaleType(arg0: string): string;
    getVariant(): string;
    hasExtensions(): boolean;
    hashCode(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private readResolve(): Object;
    stripExtensions(): Locale;
    toLanguageTag(): string;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}