import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { TimeUnit } from '../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LoggerContext } from '../../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { ManagerFactory } from '../../../../../../org/apache/logging/log4j/core/appender/ManagerFactory.d.ts'
import type { StrSubstitutor } from '../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export abstract class AbstractManager extends Object implements AutoCloseable {
    static getManager<M extends AbstractManager, T extends unknown>(paramname: string, paramfactory: ManagerFactory<M, T>, paramdata: T): M;
    static hasManager(paramname: string): boolean;
    constructor(loggerContext: LoggerContext, name: string)
    // private count: number;
    readonly loggerContext: LoggerContext;
    readonly name: string;
    close(): void;
    getContentFormat(): JavaMap<string, string>;
    getCount(): number;
    getLoggerContext(): LoggerContext;
    getName(): string;
    getStrSubstitutor(): StrSubstitutor;
    log(level: Level, message: string, throwable: Throwable): void;
    logDebug(message: string, throwable: Throwable): void;
    logError(message: string, throwable: Throwable): void;
    logWarn(message: string, throwable: Throwable): void;
    release(): void;
    releaseSub(timeout: number, timeUnit: TimeUnit): boolean;
    stop(timeout: number, timeUnit: TimeUnit): boolean;
    updateData(data: Object): void;
}