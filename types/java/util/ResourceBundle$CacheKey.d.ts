import type { Module } from '../../java/lang/Module.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { ResourceBundle$KeyElementReference } from '../../java/util/ResourceBundle$KeyElementReference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ResourceBundle$CacheKey extends Object {
    constructor(arg0: ResourceBundle$CacheKey)
    constructor(arg0: string, arg1: Locale, arg2: Module, arg3: Module)
    // private callerHasProvider: boolean;
    // private callerRef: ResourceBundle$KeyElementReference<Module>;
    // private cause: Throwable;
    // private expirationTime: number;
    // private format: string;
    // private loadTime: number;
    // private locale: Locale;
    // private moduleRef: ResourceBundle$KeyElementReference<Module>;
    // private modulesHash: number;
    // private name: string;
    // private providers: S[];
    // private providersChecked: boolean;
    callerHasProvider(): boolean;
    equals(arg0: Object | null): boolean;
    getCallerModule(): Module;
    // private getCause(): Throwable;
    getFormat(): string;
    getLocale(): Locale;
    getModule(): Module;
    getName(): string;
    getProviders(): S[];
    hasProviders(): boolean;
    hashCode(): number;
    // private setCause(arg0: Throwable): void;
    setFormat(arg0: string): void;
    setLocale(arg0: Locale): ResourceBundle$CacheKey;
    toString(): string;
}