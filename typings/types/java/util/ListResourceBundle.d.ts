import type { JavaMap } from '../../JavaMap.d.ts'
import type { ClassLoader } from '../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../java/lang/Module.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../java/util/ResourceBundle.d.ts'
import type { ResourceBundle$Control } from '../../java/util/ResourceBundle$Control.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ListResourceBundle extends ResourceBundle {
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
    // private lookup: JavaMap<string, Object>;
    getContents(): Object[][];
    getKeys(): Enumeration<string>;
    handleGetObject(arg0: string): Object;
    handleKeySet(): string[];
    // private loadLookup(): void;
}