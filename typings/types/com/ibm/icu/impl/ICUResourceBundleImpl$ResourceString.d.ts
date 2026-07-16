import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { ICUResourceBundle$OpenType } from '../../../../com/ibm/icu/impl/ICUResourceBundle$OpenType.d.ts'
import type { ICUResourceBundleImpl } from '../../../../com/ibm/icu/impl/ICUResourceBundleImpl.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { ULocale$AvailableType } from '../../../../com/ibm/icu/util/ULocale$AvailableType.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../java/util/ResourceBundle$Control.d.ts'
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
    static createBundle(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): ICUResourceBundle;
    static getAvailableLocaleNameSet(): string[];
    static getAvailableLocaleNameSet(paramarg0: string, paramarg1: ClassLoader): string[];
    static getAvailableLocales(): Locale[];
    static getAvailableLocales(paramarg0: ULocale$AvailableType): Locale[];
    static getAvailableLocales(paramarg0: string, paramarg1: ClassLoader): Locale[];
    static getAvailableLocales(paramarg0: string, paramarg1: ClassLoader, paramarg2: ULocale$AvailableType): Locale[];
    static getAvailableULocales(): ULocale[];
    static getAvailableULocales(paramarg0: ULocale$AvailableType): ULocale[];
    static getAvailableULocales(paramarg0: string, paramarg1: ClassLoader): ULocale[];
    static getAvailableULocales(paramarg0: string, paramarg1: ClassLoader, paramarg2: ULocale$AvailableType): ULocale[];
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
    static getFunctionalEquivalent(paramarg0: string, paramarg1: ClassLoader, paramarg2: string, paramarg3: string, paramarg4: ULocale, paramarg5: boolean[], paramarg6: boolean): ULocale;
    static getKeywordValues(paramarg0: string, paramarg1: string): string[];
    static getLocaleList(paramarg0: ULocale[]): Locale[];
    static getParentLocaleID(paramarg0: string, paramarg1: string, paramarg2: ICUResourceBundle$OpenType): string;
    constructor(arg0: ICUResourceBundleImpl, arg1: string, arg2: number)
    // private value: string;
    getString(): string;
    getString(arg0: number): string;
    getString(arg0: string): string;
    getType(): number;
}