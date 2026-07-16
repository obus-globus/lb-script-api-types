import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../../../../java/lang/Module.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ICUResourceBundle$OpenType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle$OpenType.d.ts'
import type { ICUResourceBundle$WholeBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle$WholeBundle.d.ts'
import type { ICUResourceBundleReader$ReaderValue } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundleReader$ReaderValue.d.ts'
import type { UResource$Key } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/UResource$Value.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class ICUResourceBundle extends UResourceBundle {
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
    static getAvailableLocales(): Locale[];
    static getAvailableLocales(parambaseName: string, paramloader: ClassLoader): Locale[];
    static getAvailableLocales(parambaseName: string, paramloader: ClassLoader, paramtype: ULocale$AvailableType): Locale[];
    static getAvailableLocales(paramtype: ULocale$AvailableType): Locale[];
    static getAvailableULocales(): ULocale[];
    static getAvailableULocales(parambaseName: string, paramloader: ClassLoader): ULocale[];
    static getAvailableULocales(parambaseName: string, paramloader: ClassLoader, paramtype: ULocale$AvailableType): ULocale[];
    static getAvailableULocales(paramtype: ULocale$AvailableType): ULocale[];
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
    static getFunctionalEquivalent(parambaseName: string, paramloader: ClassLoader, paramresName: string, paramkeyword: string, paramlocID: ULocale, paramisAvailable: boolean[], paramomitDefault: boolean): ULocale;
    static getKeywordValues(parambaseName: string, paramkeyword: string): string[];
    static getLocaleList(paramulocales: ULocale[]): Locale[];
    static getParentLocaleID(paramname: string, paramorigName: string, paramopenType: ICUResourceBundle$OpenType): string;
    constructor(container: ICUResourceBundle, key: string)
    constructor(wholeBundle: ICUResourceBundle$WholeBundle)
    // private container: ICUResourceBundle;
    key: string;
    // private wholeBundle: ICUResourceBundle$WholeBundle;
    at(index: number): ICUResourceBundle;
    at(key: string): ICUResourceBundle;
    equals(other: Object | null): boolean;
    findStringWithFallback(path: string): string;
    findTopLevel(index: number): ICUResourceBundle;
    findTopLevel(aKey: string): ICUResourceBundle;
    findWithFallback(path: string): ICUResourceBundle;
    get(index: number): UResourceBundle;
    get(aKey: string): UResourceBundle;
    get(aKey: string, aliasesVisited: { [key: string]: string }, requested: UResourceBundle): ICUResourceBundle;
    getAllChildrenWithFallback(path: string, sink: UResource$Sink): void;
    getAllItemsWithFallback(path: string, sink: UResource$Sink): void;
    // private getAllItemsWithFallback(key: UResource$Key, readerValue: ICUResourceBundleReader$ReaderValue, sink: UResource$Sink, requested: UResourceBundle): void;
    getAllItemsWithFallbackNoFail(path: string, sink: UResource$Sink): void;
    getBaseName(): string;
    getKey(): string;
    getLocale(): Locale;
    getLocaleID(): string;
    // private getNoFallback(): boolean;
    getParent(): ICUResourceBundle;
    // private getResDepth(): number;
    // private getResPathKeys(keys: string[], depth: number): void;
    getStringWithFallback(path: string): string;
    getTopLevelKeySet(): string[];
    getULocale(): ULocale;
    getValueWithFallback(path: string): UResource$Value;
    getWithFallback(path: string): ICUResourceBundle;
    handleGetKeys(): Enumeration<string>;
    hashCode(): number;
    isRoot(): boolean;
    isTopLevelResource(): boolean;
    setParent(parent: ResourceBundle): void;
    setTopLevelKeySet(keySet: string[]): void;
}