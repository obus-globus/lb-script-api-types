import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../../../../java/lang/Module.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
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
    static getBundleInstance(parambaseName: string, paramlocaleID: string, paramroot: ClassLoader, paramdisableFallback: boolean): ResourceBundleWrapper;
    static getBundleInstance(parambaseName: string): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleName: string): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleName: string, paramroot: ClassLoader): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: Locale): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: Locale, paramloader: ClassLoader): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale, paramloader: ClassLoader): UResourceBundle;
    static getBundleInstance(paramlocale: ULocale): UResourceBundle;
    private constructor(bundle: ResourceBundle)
    // private baseName: string;
    // private bundle: ResourceBundle;
    readonly keys: string[];
    // private localeID: string;
    getBaseName(): string;
    getKeys(): Enumeration<string>;
    getLocaleID(): string;
    getParent(): UResourceBundle;
    getULocale(): ULocale;
    handleGetObject(aKey: string): Object;
    // private initKeysVector(): void;
}