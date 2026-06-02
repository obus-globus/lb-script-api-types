import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../../../../java/lang/Module.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { ICUResourceBundle$OpenType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle$OpenType.d.ts'
import type { ICUResourceBundleImpl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleImpl.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class ICUResourceBundleImpl$ResourceString extends ICUResourceBundleImpl {
    static ALIAS: number;
    static ARRAY: number;
    static ARRAY16: number;
    static BINARY: number;
    static ICU_DATA_CLASS_LOADER: ClassLoader;
    static INT: number;
    static INT_VECTOR: number;
    static NONE: number;
    static NO_INHERITANCE_MARKER: string;
    static RES_BOGUS: number;
    static STRING: number;
    static STRING_V2: number;
    static TABLE: number;
    static TABLE16: number;
    static TABLE32: number;
    static clearCache(): void;
    static clearCache(paramarg0: ClassLoader): void;
    static createBundle(parambaseName: string, paramlocaleID: string, paramroot: ClassLoader): ICUResourceBundle;
    static getAvailableLocaleNameSet(): string[];
    static getAvailableLocaleNameSet(parambundlePrefix: string, paramloader: ClassLoader): string[];
    static getAvailableLocales(): (Object | null)[];
    static getAvailableLocales(parambaseName: string, paramloader: ClassLoader): (Object | null)[];
    static getAvailableLocales(parambaseName: string, paramloader: ClassLoader, paramtype: ULocale$AvailableType): (Object | null)[];
    static getAvailableLocales(paramtype: ULocale$AvailableType): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getAvailableULocales(parambaseName: string, paramloader: ClassLoader): (Object | null)[];
    static getAvailableULocales(parambaseName: string, paramloader: ClassLoader, paramtype: ULocale$AvailableType): (Object | null)[];
    static getAvailableULocales(paramtype: ULocale$AvailableType): (Object | null)[];
    static getBundle(paramarg0: string): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Module): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader, paramarg3: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: Module): ResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleID: string, paramroot: ClassLoader, paramdisableFallback: boolean): ICUResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleID: string, paramroot: ClassLoader, paramopenType: ICUResourceBundle$OpenType): ICUResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale, paramopenType: ICUResourceBundle$OpenType): ICUResourceBundle;
    static getBundleInstance(parambaseName: string): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleName: string): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleName: string, paramroot: ClassLoader): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: Locale): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: Locale, paramloader: ClassLoader): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale, paramloader: ClassLoader): UResourceBundle;
    static getBundleInstance(paramlocale: ULocale): UResourceBundle;
    static getFullLocaleNameSet(): string[];
    static getFullLocaleNameSet(parambundlePrefix: string, paramloader: ClassLoader): string[];
    static getFunctionalEquivalent(parambaseName: string, paramloader: ClassLoader, paramresName: string, paramkeyword: string, paramlocID: ULocale, paramisAvailable: (Object | null)[], paramomitDefault: boolean): ULocale;
    static getKeywordValues(parambaseName: string, paramkeyword: string): (Object | null)[];
    static getLocaleList(paramulocales: (Object | null)[]): (Object | null)[];
    static getParentLocaleID(paramname: string, paramorigName: string, paramopenType: ICUResourceBundle$OpenType): string;
    constructor(container: ICUResourceBundleImpl, key: string, resource: number)
    // private value: string;
    getString(): string;
    getType(): number;
}