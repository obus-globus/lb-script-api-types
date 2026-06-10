import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { TruffleLogger$ChildLoggerRef } from '../../../../com/oracle/truffle/api/TruffleLogger$ChildLoggerRef.d.ts'
import type { TruffleLogger$LoggerCache } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class TruffleLogger extends Object {
    static getLogger(paramid: string): TruffleLogger;
    static getLogger(paramid: string, paramforClass: Class<Object>): TruffleLogger;
    static getLogger(paramid: string, paramloggerName: string): TruffleLogger;
    private constructor(loggerCache: TruffleLogger$LoggerCache)
    private constructor(loggerName: string, loggerCache: TruffleLogger$LoggerCache)
    // private children: TruffleLogger$ChildLoggerRef[];
    // private levelNum: number;
    // private levelNumStable: Assumption;
    // private levelObj: Level;
    // private loggerCache: TruffleLogger$LoggerCache;
    readonly name: string;
    readonly parent: TruffleLogger;
    // private callHandlers(record: LogRecord): void;
    config(messageSupplier: () => string): void;
    config(message: string): void;
    // private doLog(level: Level, messageSupplier: () => string, className: string, methodName: string, thrown: Throwable): void;
    // private doLog(level: Level, message: string, className: string, methodName: string, param: Object): void;
    // private doLog(level: Level, message: string, className: string, methodName: string, params: Object[]): void;
    // private doLog(level: Level, message: string, className: string, methodName: string, thrown: Throwable): void;
    entering(sourceClass: string, sourceMethod: string): void;
    entering(sourceClass: string, sourceMethod: string, parameter: Object): void;
    entering(sourceClass: string, sourceMethod: string, parameters: Object[]): void;
    exiting(sourceClass: string, sourceMethod: string): void;
    exiting(sourceClass: string, sourceMethod: string, result: Object): void;
    fine(messageSupplier: () => string): void;
    fine(message: string): void;
    finer(messageSupplier: () => string): void;
    finer(message: string): void;
    finest(messageSupplier: () => string): void;
    finest(message: string): void;
    // private getLevelNum(): number;
    getLoggerCache(): TruffleLogger$LoggerCache;
    getName(): string;
    getParent(): TruffleLogger;
    info(messageSupplier: () => string): void;
    info(message: string): void;
    isLoggable(level: Level): boolean;
    // private isLoggableSlowPath(level: Level): boolean;
    log(level: Level, messageSupplier: () => string): void;
    log(level: Level, message: string): void;
    log(level: Level, message: string, parameter: Object): void;
    log(level: Level, message: string, parameters: Object[]): void;
    log(level: Level, message: string, thrown: Throwable): void;
    log(level: Level, thrown: Throwable, messageSupplier: () => string): void;
    logp(level: Level, sourceClass: string, sourceMethod: string, messageSupplier: () => string): void;
    logp(level: Level, sourceClass: string, sourceMethod: string, message: string): void;
    logp(level: Level, sourceClass: string, sourceMethod: string, message: string, parameter: Object): void;
    logp(level: Level, sourceClass: string, sourceMethod: string, message: string, parameters: Object[]): void;
    logp(level: Level, sourceClass: string, sourceMethod: string, message: string, thrown: Throwable): void;
    logp(level: Level, sourceClass: string, sourceMethod: string, thrown: Throwable, messageSupplier: () => string): void;
    // private removeChild(child: TruffleLogger$ChildLoggerRef): void;
    // private setLevel(level: Level, singleContext: boolean): void;
    // private setLevelNum(value: number): boolean;
    // private setParent(newParent: TruffleLogger, singleContext: boolean): void;
    severe(messageSupplier: () => string): void;
    severe(message: string): void;
    throwing<T extends Throwable>(sourceClass: string, sourceMethod: string, thrown: T): T;
    // private updateLevelNum(singleContext: boolean): void;
    warning(messageSupplier: () => string): void;
    warning(message: string): void;
}