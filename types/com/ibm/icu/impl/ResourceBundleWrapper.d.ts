import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResourceBundleWrapper extends UResourceBundle {
    static ARRAY: number;
    static BINARY: number;
    static INT: number;
    static INT_VECTOR: number;
    static NONE: number;
    static STRING: number;
    static TABLE: number;
    static clearCache(): void;
    static clearCache(paramarg0: ClassLoader): void;
    static getBundle(paramarg0: string): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Module): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader, paramarg3: ResourceBundle$Control): ResourceBundle;
    static getBundle(paramarg0: string, paramarg1: Locale, paramarg2: Module): ResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string, paramarg2: ClassLoader, paramarg3: boolean): ResourceBundleWrapper;
    static getBundleInstance(paramarg0: ULocale): UResourceBundle;
    static getBundleInstance(paramarg0: string): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale, paramarg2: ClassLoader): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: Locale): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader): UResourceBundle;
    private constructor(arg0: ResourceBundle)
    // private baseName: string;
    // private bundle: ResourceBundle;
    readonly keys: string[];
    // private localeID: string;
    getBaseName(): string;
    getKeys(): Enumeration<string>;
    getLocaleID(): string;
    getParent(): UResourceBundle;
    getULocale(): ULocale;
    handleGetObject(arg0: string): Object;
    // private initKeysVector(): void;
}