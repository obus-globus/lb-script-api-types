import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ClassLoader } from '../../../../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../../../../java/lang/Module.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Enumeration } from '../../../../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundleIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundleIterator.d.ts'
import type { VersionInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/VersionInfo.d.ts'
export abstract class UResourceBundle extends ResourceBundle {
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
    static getBundleInstance(parambaseName: string): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleName: string): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocaleName: string, paramroot: ClassLoader): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: Locale): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: Locale, paramloader: ClassLoader): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale): UResourceBundle;
    static getBundleInstance(parambaseName: string, paramlocale: ULocale, paramloader: ClassLoader): UResourceBundle;
    static getBundleInstance(paramlocale: ULocale): UResourceBundle;
    constructor()
    findTopLevel(index: number): UResourceBundle;
    findTopLevel(aKey: string): UResourceBundle;
    get(index: number): UResourceBundle;
    get(aKey: string): UResourceBundle;
    getBaseName(): string;
    getBinary(): ByteBuffer;
    getBinary(ba: number[]): number[];
    getInt(): number;
    getIntVector(): number[];
    getIterator(): UResourceBundleIterator;
    getKey(): string;
    getKeys(): Enumeration<string>;
    getLocale(): Locale;
    getLocaleID(): string;
    getParent(): UResourceBundle;
    getSize(): number;
    getString(): string;
    getString(index: number): string;
    getString(arg0: string): string;
    getStringArray(): string[];
    getStringArray(arg0: string): string[];
    getType(): number;
    getUInt(): number;
    getULocale(): ULocale;
    getVersion(): VersionInfo;
    handleGet(index: number, aliasesVisited: JavaMap<string, string>, requested: UResourceBundle): UResourceBundle;
    handleGet(aKey: string, aliasesVisited: JavaMap<string, string>, requested: UResourceBundle): UResourceBundle;
    handleGetKeys(): Enumeration<string>;
    handleGetObject(aKey: string): Object;
    // private handleGetObjectImpl(aKey: string, requested: UResourceBundle): Object;
    handleGetStringArray(): string[];
    handleKeySet(): string[];
    isTopLevelResource(): boolean;
    keySet(): string[];
    // private resolveObject(aKey: string, requested: UResourceBundle): Object;
}