import type { Class } from '../../../java/lang/Class.d.ts'
import type { Module } from '../../../java/lang/Module.d.ts'
import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../java/util/ResourceBundle.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Filter } from '../../../java/util/logging/Filter.d.ts'
import type { Handler } from '../../../java/util/logging/Handler.d.ts'
import type { Level } from '../../../java/util/logging/Level.d.ts'
import type { LogManager } from '../../../java/util/logging/LogManager.d.ts'
import type { LogManager$LoggerWeakRef } from '../../../java/util/logging/LogManager$LoggerWeakRef.d.ts'
import type { LogRecord } from '../../../java/util/logging/LogRecord.d.ts'
import type { Logger$ConfigurationData } from '../../../java/util/logging/Logger$ConfigurationData.d.ts'
import type { Logger$LoggerBundle } from '../../../java/util/logging/Logger$LoggerBundle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class Logger extends Object {
    static GLOBAL_LOGGER_NAME: string;
    static global: Logger;
    static getAnonymousLogger(): Logger;
    static getAnonymousLogger(paramarg0: string): Logger;
    static getGlobal(): Logger;
    static getLogger(paramarg0: string): Logger;
    static getLogger(paramarg0: string, paramarg1: string): Logger;
    private constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Module, arg3: LogManager, arg4: boolean)
    // private anonymous: boolean;
    // private callerModuleRef: WeakReference<Module>;
    // private catalogLocale: Locale;
    // private catalogName: string;
    // private catalogRef: WeakReference<ResourceBundle>;
    // private config: Logger$ConfigurationData;
    // private isSystemLogger: boolean;
    // private kids: LogManager$LoggerWeakRef[];
    // private loggerBundle: Logger$LoggerBundle;
    // private manager: LogManager;
    readonly name: string;
    readonly parent: Logger;
    accessCheckedHandlers(): Handler[];
    addHandler(arg0: Handler): void;
    // private catalog(): ResourceBundle;
    config(arg0: () => string): void;
    config(arg0: string): void;
    // private doLog(arg0: LogRecord): void;
    // private doLog(arg0: LogRecord, arg1: ResourceBundle): void;
    // private doLog(arg0: LogRecord, arg1: string): void;
    // private doSetParent(arg0: Logger): void;
    // private ensureManagerInitialized(): void;
    entering(arg0: string, arg1: string): void;
    entering(arg0: string, arg1: string, arg2: Object): void;
    entering(arg0: string, arg1: string, arg2: Object[]): void;
    exiting(arg0: string, arg1: string): void;
    exiting(arg0: string, arg1: string, arg2: Object): void;
    // private findResourceBundle(arg0: string, arg1: boolean): ResourceBundle;
    fine(arg0: () => string): void;
    fine(arg0: string): void;
    finer(arg0: () => string): void;
    finer(arg0: string): void;
    finest(arg0: () => string): void;
    finest(arg0: string): void;
    // private getCallerModule(): Module;
    // private getEffectiveLoggerBundle(): Logger$LoggerBundle;
    getFilter(): (param0: LogRecord) => kotlin.Boolean;
    getHandlers(): Handler[];
    getLevel(): Level;
    getName(): string;
    getParent(): Logger;
    getResourceBundle(): ResourceBundle;
    getResourceBundleName(): string;
    getUseParentHandlers(): boolean;
    info(arg0: () => string): void;
    info(arg0: string): void;
    isLevelInitialized(): boolean;
    isLoggable(arg0: Level): boolean;
    log(arg0: Level, arg1: () => string): void;
    log(arg0: Level, arg1: string): void;
    log(arg0: Level, arg1: string, arg2: Object): void;
    log(arg0: Level, arg1: string, arg2: Object[]): void;
    log(arg0: Level, arg1: string, arg2: Throwable): void;
    log(arg0: Level, arg1: Throwable, arg2: () => string): void;
    log(arg0: LogRecord): void;
    logp(arg0: Level, arg1: string, arg2: string, arg3: () => string): void;
    logp(arg0: Level, arg1: string, arg2: string, arg3: string): void;
    logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Object): void;
    logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Object[]): void;
    logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Throwable): void;
    logp(arg0: Level, arg1: string, arg2: string, arg3: Throwable, arg4: () => string): void;
    logrb(arg0: Level, arg1: ResourceBundle, arg2: string, arg3: Object[]): void;
    logrb(arg0: Level, arg1: ResourceBundle, arg2: string, arg3: Throwable): void;
    logrb(arg0: Level, arg1: string, arg2: string, arg3: ResourceBundle, arg4: string, arg5: Object[]): void;
    logrb(arg0: Level, arg1: string, arg2: string, arg3: ResourceBundle, arg4: string, arg5: Throwable): void;
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string): void;
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Object): void;
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Object[]): void;
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Throwable): void;
    mergeWithSystemLogger(arg0: Logger): void;
    removeChildLogger(arg0: LogManager$LoggerWeakRef): void;
    removeHandler(arg0: Handler): void;
    // private setCallerModuleRef(arg0: Module): void;
    setFilter(arg0: (param0: LogRecord) => kotlin.Boolean): void;
    setLevel(arg0: Level): void;
    setLogManager(arg0: LogManager): void;
    setParent(arg0: Logger): void;
    setResourceBundle(arg0: ResourceBundle): void;
    setUseParentHandlers(arg0: boolean): void;
    // private setupResourceInfo(arg0: string, arg1: Class<Object>): void;
    // private setupResourceInfo(arg0: string, arg1: Module): void;
    severe(arg0: () => string): void;
    severe(arg0: string): void;
    throwing(arg0: string, arg1: string, arg2: Throwable): void;
    // private updateEffectiveLevel(): void;
    warning(arg0: () => string): void;
    warning(arg0: string): void;
}