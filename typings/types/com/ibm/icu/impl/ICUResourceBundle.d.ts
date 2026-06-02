import type { ICUResourceBundle$OpenType } from '../../../../com/ibm/icu/impl/ICUResourceBundle$OpenType.d.ts'
import type { ICUResourceBundle$WholeBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle$WholeBundle.d.ts'
import type { ICUResourceBundleReader$ReaderValue } from '../../../../com/ibm/icu/impl/ICUResourceBundleReader$ReaderValue.d.ts'
import type { UResource$Key } from '../../../../com/ibm/icu/impl/UResource$Key.d.ts'
import type { UResource$Sink } from '../../../../com/ibm/icu/impl/UResource$Sink.d.ts'
import type { UResource$Value } from '../../../../com/ibm/icu/impl/UResource$Value.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static createBundle(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): ICUResourceBundle;
    static getAvailableLocaleNameSet(): string[];
    static getAvailableLocaleNameSet(paramarg0: string, paramarg1: ClassLoader): string[];
    static getAvailableLocales(): (Object | null)[];
    static getAvailableLocales(paramarg0: ULocale$AvailableType): (Object | null)[];
    static getAvailableLocales(paramarg0: string, paramarg1: ClassLoader): (Object | null)[];
    static getAvailableLocales(paramarg0: string, paramarg1: ClassLoader, paramarg2: ULocale$AvailableType): (Object | null)[];
    static getAvailableULocales(): (Object | null)[];
    static getAvailableULocales(paramarg0: ULocale$AvailableType): (Object | null)[];
    static getAvailableULocales(paramarg0: string, paramarg1: ClassLoader): (Object | null)[];
    static getAvailableULocales(paramarg0: string, paramarg1: ClassLoader, paramarg2: ULocale$AvailableType): (Object | null)[];
    static getBundle(paramarg0: string): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Module): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader, paramarg3: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: Module): ResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale, paramarg2: ICUResourceBundle$OpenType): ICUResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string, paramarg2: ClassLoader, paramarg3: boolean): ICUResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string, paramarg2: ClassLoader, paramarg3: ICUResourceBundle$OpenType): ICUResourceBundle;
    static getBundleInstance(paramarg0: ULocale): UResourceBundle;
    static getBundleInstance(paramarg0: string): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale, paramarg2: ClassLoader): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: Locale): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader): UResourceBundle;
    static getFullLocaleNameSet(): string[];
    static getFullLocaleNameSet(paramarg0: string, paramarg1: ClassLoader): string[];
    static getFunctionalEquivalent(paramarg0: string, paramarg1: ClassLoader, paramarg2: string, paramarg3: string, paramarg4: ULocale, paramarg5: (Object | null)[], paramarg6: boolean): ULocale;
    static getKeywordValues(paramarg0: string, paramarg1: string): (Object | null)[];
    static getLocaleList(paramarg0: (Object | null)[]): (Object | null)[];
    static getParentLocaleID(paramarg0: string, paramarg1: string, paramarg2: ICUResourceBundle$OpenType): string;
    constructor(arg0: ICUResourceBundle, arg1: string)
    constructor(arg0: ICUResourceBundle$WholeBundle)
    // private container: ICUResourceBundle;
    key: string;
    // private wholeBundle: ICUResourceBundle$WholeBundle;
    at(arg0: number): ICUResourceBundle;
    at(arg0: string): ICUResourceBundle;
    equals(arg0: Object | null): boolean;
    findStringWithFallback(arg0: string): string;
    findTopLevel(arg0: number): ICUResourceBundle;
    findTopLevel(arg0: string): ICUResourceBundle;
    findWithFallback(arg0: string): ICUResourceBundle;
    get(arg0: string, arg1: { [key: string]: string }, arg2: UResourceBundle): ICUResourceBundle;
    getAllChildrenWithFallback(arg0: string, arg1: UResource$Sink): void;
    // private getAllItemsWithFallback(arg0: UResource$Key, arg1: ICUResourceBundleReader$ReaderValue, arg2: UResource$Sink, arg3: UResourceBundle): void;
    getAllItemsWithFallback(arg0: string, arg1: UResource$Sink): void;
    getAllItemsWithFallbackNoFail(arg0: string, arg1: UResource$Sink): void;
    getBaseName(): string;
    getKey(): string;
    getLocale(): Locale;
    getLocaleID(): string;
    // private getNoFallback(): boolean;
    getParent(): ICUResourceBundle;
    // private getResDepth(): number;
    // private getResPathKeys(arg0: string[], arg1: number): void;
    getStringWithFallback(arg0: string): string;
    getTopLevelKeySet(): string[];
    getULocale(): ULocale;
    getValueWithFallback(arg0: string): UResource$Value;
    getWithFallback(arg0: string): ICUResourceBundle;
    handleGetKeys(): Enumeration<string>;
    hashCode(): number;
    isRoot(): boolean;
    isTopLevelResource(): boolean;
    setParent(arg0: ResourceBundle): void;
    setTopLevelKeySet(arg0: string[]): void;
}