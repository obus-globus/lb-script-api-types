import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../java/lang/Module.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../../java/util/ResourceBundle$Control.d.ts'
import type { AtomicMarkableReference } from '../../../java/util/concurrent/atomic/AtomicMarkableReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OpenListResourceBundle } from '../../../sun/util/resources/OpenListResourceBundle.d.ts'
export abstract class ParallelListResourceBundle extends ResourceBundle {
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
    constructor()
    // private keyset: string[];
    // private lookup: JavaMap<string, Object>;
    readonly parallelContents: AtomicMarkableReference<Object[][]>;
    areParallelContentsComplete(): boolean;
    containsKey(arg0: string): boolean;
    getContents(): Object[][];
    getKeys(): Enumeration<string>;
    getParent(): ResourceBundle;
    handleGetObject(arg0: string): Object;
    handleKeySet(): string[];
    keySet(): string[];
    loadLookupTablesIfNecessary(): void;
    resetKeySet(): void;
    setParallelContents(arg0: OpenListResourceBundle): void;
}