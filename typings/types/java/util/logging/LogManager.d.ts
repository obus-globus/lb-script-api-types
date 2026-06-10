import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Module } from '../../../java/lang/Module.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { ReentrantLock } from '../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Filter } from '../../../java/util/logging/Filter.d.ts'
import type { Formatter } from '../../../java/util/logging/Formatter.d.ts'
import type { Handler } from '../../../java/util/logging/Handler.d.ts'
import type { Level } from '../../../java/util/logging/Level.d.ts'
import type { LogManager$CloseOnReset } from '../../../java/util/logging/LogManager$CloseOnReset.d.ts'
import type { LogManager$LoggerContext } from '../../../java/util/logging/LogManager$LoggerContext.d.ts'
import type { LogRecord } from '../../../java/util/logging/LogRecord.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { LoggingMXBean } from '../../../java/util/logging/LoggingMXBean.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LogManager extends Object {
    static LOGGING_MXBEAN_NAME: string;
    static getLogManager(): LogManager;
    static getLoggingMXBean(): LoggingMXBean;
    constructor()
    // private closeOnResetLoggers: LogManager$CloseOnReset[];
    // private configurationLock: ReentrantLock;
    // private globalHandlersState: number;
    // private initializationDone: boolean;
    // private initializedCalled: boolean;
    // private listeners: Map<Object, () => void>;
    // private loggerRefQueue: ReferenceQueue<Logger>;
    // private props: Properties;
    // private readPrimordialConfiguration: boolean;
    // private rootLogger: Logger;
    // private systemContext: LogManager$LoggerContext;
    // private userContext: LogManager$LoggerContext;
    addConfigurationListener(arg0: () => void): LogManager;
    addLogger(arg0: Logger): boolean;
    checkAccess(): void;
    // private closeHandlers(arg0: Logger): void;
    // private contexts(): LogManager$LoggerContext[];
    // private createLoggerHandlers(arg0: string, arg1: string): Handler[];
    demandLogger(arg0: string, arg1: string, arg2: Class<Object>): Logger;
    demandLogger(arg0: string, arg1: string, arg2: Module): Logger;
    demandSystemLogger(arg0: string, arg1: string, arg2: Class<Object>): Logger;
    demandSystemLogger(arg0: string, arg1: string, arg2: Module): Logger;
    drainLoggerRefQueueBounded(): void;
    ensureLogManagerInitialized(): void;
    // private forceLoadHandlers(arg0: Logger): boolean;
    getBooleanProperty(arg0: string, arg1: boolean): boolean;
    getConfigurationFileName(): string;
    getFilterProperty(arg0: string, arg1: (param0: LogRecord) => boolean): (param0: LogRecord) => boolean;
    getFormatterProperty(arg0: string, arg1: Formatter): Formatter;
    getIntProperty(arg0: string, arg1: number): number;
    getLevelProperty(arg0: string, arg1: Level): Level;
    getLogger(arg0: string): Logger;
    getLoggerNames(): Enumeration<string>;
    getLongProperty(arg0: string, arg1: number): number;
    getProperty(arg0: string): string;
    getStringProperty(arg0: string, arg1: string): string;
    getSystemContext(): LogManager$LoggerContext;
    // private getUserContext(): LogManager$LoggerContext;
    // private initializeGlobalHandlers(): void;
    // private invokeConfigurationListeners(): void;
    // private loadLoggerHandlers(arg0: Logger, arg1: string, arg2: string): void;
    // private parseClassNames(arg0: string): string[];
    readConfiguration(): void;
    readConfiguration(arg0: InputStream): void;
    // private readPrimordialConfiguration(): void;
    removeConfigurationListener(arg0: () => void): void;
    reset(): void;
    // private resetLogger(arg0: Logger): void;
    // private resetLoggerContext(arg0: LogManager$LoggerContext): void;
    // private setLevelsOnExistingLoggers(): void;
    // private setLoggerHandlers(arg0: Logger, arg1: string, arg2: string, arg3: Handler[]): void;
    updateConfiguration(arg0: InputStream, arg1: (param0: string) => (param0: string, param1: string) => string): void;
    updateConfiguration(arg0: (param0: string) => (param0: string, param1: string) => string): void;
}