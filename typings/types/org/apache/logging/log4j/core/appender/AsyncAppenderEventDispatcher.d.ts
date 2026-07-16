import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Thread$Builder$OfPlatform } from '../../../../../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../../../../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { Duration } from '../../../../../../java/time/Duration.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Appender } from '../../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { AppenderControl } from '../../../../../../org/apache/logging/log4j/core/config/AppenderControl.d.ts'
import type { Log4jThread } from '../../../../../../org/apache/logging/log4j/core/util/Log4jThread.d.ts'
export class AsyncAppenderEventDispatcher extends Log4jThread {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static dumpStack(): void;
    static enumerate(paramarg0: Thread[]): number;
    static getAllStackTraces(): Map<Thread, StackTraceElement[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    static holdsLock(paramarg0: Object): boolean;
    static interrupted(): boolean;
    static ofPlatform(): Thread$Builder$OfPlatform;
    static ofVirtual(): Thread$Builder$OfVirtual;
    static onSpinWait(): void;
    static setDefaultUncaughtExceptionHandler(paramarg0: (param0: Thread, param1: Throwable) => void): void;
    static sleep(paramarg0: Duration): void;
    static sleep(paramarg0: number): void;
    static sleep(paramarg0: number, paramarg1: number): void;
    static startVirtualThread(paramarg0: () => void): Thread;
    static yield(): void;
    constructor(name: string, errorAppender: AppenderControl, appenders: AppenderControl[], queue: LogEvent[])
    // private appenders: AppenderControl[];
    // private errorAppender: AppenderControl;
    // private queue: LogEvent[];
    // private stoppedRef: AtomicBoolean;
    dispatch(event: LogEvent): void;
    // private dispatchAll(): void;
    // private dispatchRemaining(): void;
    getAppenders(): Appender[];
    run(): void;
    stop(): void;
    stop(timeoutMillis: number): void;
}