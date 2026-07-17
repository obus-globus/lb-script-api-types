import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { UResourceBundleIterator } from '../../../../com/ibm/icu/util/UResourceBundleIterator.d.ts'
import type { VersionInfo } from '../../../../com/ibm/icu/util/VersionInfo.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static getBundleInstance(paramarg0: ULocale): UResourceBundle;
    static getBundleInstance(paramarg0: string): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: ULocale, paramarg2: ClassLoader): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: string, paramarg2: ClassLoader): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: Locale): UResourceBundle;
    static getBundleInstance(paramarg0: string, paramarg1: Locale, paramarg2: ClassLoader): UResourceBundle;
    constructor()
    findTopLevel(arg0: number): UResourceBundle;
    findTopLevel(arg0: string): UResourceBundle;
    get(arg0: number): UResourceBundle;
    get(arg0: string): UResourceBundle;
    getBaseName(): string;
    getBinary(): ByteBuffer;
    getBinary(arg0: number[]): number[];
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
    getString(arg0: number): string;
    getString(arg0: string): string;
    getStringArray(): string[];
    getStringArray(arg0: string): string[];
    getType(): number;
    getUInt(): number;
    getULocale(): ULocale;
    getVersion(): VersionInfo;
    handleGet(arg0: number, arg1: JavaMap<string, string>, arg2: UResourceBundle): UResourceBundle;
    handleGet(arg0: string, arg1: JavaMap<string, string>, arg2: UResourceBundle): UResourceBundle;
    handleGetKeys(): Enumeration<string>;
    handleGetObject(arg0: string): Object;
    // private handleGetObjectImpl(arg0: string, arg1: UResourceBundle): Object;
    handleGetStringArray(): string[];
    handleKeySet(): string[];
    isTopLevelResource(): boolean;
    keySet(): string[];
    // private resolveObject(arg0: string, arg1: UResourceBundle): Object;
}