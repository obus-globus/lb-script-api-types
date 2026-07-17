import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Module } from '../../../java/lang/Module.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { LogManager } from '../../../java/util/logging/LogManager.d.ts'
import type { LogManager$LogNode } from '../../../java/util/logging/LogManager$LogNode.d.ts'
import type { LogManager$LoggerWeakRef } from '../../../java/util/logging/LogManager$LoggerWeakRef.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LogManager$LoggerContext extends Object {
    private constructor(null_: LogManager)
    // private namedLoggers: JavaMap<string, LogManager$LoggerWeakRef>;
    // private root: LogManager$LogNode;
    addLocalLogger(arg0: Logger): boolean;
    addLocalLogger(arg0: Logger, arg1: boolean): boolean;
    demandLogger(arg0: string, arg1: string, arg2: Module): Logger;
    // private ensureAllDefaultLoggers(arg0: Logger): void;
    // private ensureDefaultLogger(arg0: Logger): void;
    // private ensureInitialized(): void;
    findLogger(arg0: string): Logger;
    getGlobalLogger(): Logger;
    getLoggerNames(): Enumeration<string>;
    getNode(arg0: string): LogManager$LogNode;
    getOwner(): LogManager;
    getRootLogger(): Logger;
    // private processParentHandlers(arg0: Logger, arg1: string, arg2: (param0: Logger) => boolean): void;
    removeLoggerRef(arg0: string, arg1: LogManager$LoggerWeakRef): void;
    requiresDefaultLoggers(): boolean;
}