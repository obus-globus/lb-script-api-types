import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { FlowMessageFactory } from '../../../../../org/apache/logging/log4j/message/FlowMessageFactory.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { AbstractLogger } from '../../../../../org/apache/logging/log4j/spi/AbstractLogger.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { StatusConsoleListener } from '../../../../../org/apache/logging/log4j/status/StatusConsoleListener.d.ts'
import type { StatusData } from '../../../../../org/apache/logging/log4j/status/StatusData.d.ts'
import type { StatusListener } from '../../../../../org/apache/logging/log4j/status/StatusListener.d.ts'
import type { StatusLogger$Config } from '../../../../../org/apache/logging/log4j/status/StatusLogger$Config.d.ts'
import type { MessageSupplier } from '../../../../../org/apache/logging/log4j/util/MessageSupplier.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class StatusLogger extends AbstractLogger {
    static CATCHING_MARKER: Marker;
    static DEFAULT_FLOW_MESSAGE_FACTORY_CLASS: Class<FlowMessageFactory>;
    static DEFAULT_MESSAGE_FACTORY_CLASS: Class<MessageFactory>;
    static DEFAULT_STATUS_LISTENER_LEVEL: string;
    static ENTRY_MARKER: Marker;
    static EXCEPTION_MARKER: Marker;
    static EXIT_MARKER: Marker;
    static FLOW_MARKER: Marker;
    static MAX_STATUS_ENTRIES: string;
    static PROPERTIES_FILE_NAME: string;
    static STATUS_DATE_FORMAT: string;
    static THROWING_MARKER: Marker;
    static checkMessageFactory(paramlogger: ExtendedLogger, parammessageFactory: MessageFactory): void;
    static getLogger(): StatusLogger;
    static getRecursionDepth(): number;
    static setLogger(paramlogger: StatusLogger): void;
    constructor()
    constructor(name: string, messageFactory: MessageFactory, config: StatusLogger$Config, fallbackListener: StatusConsoleListener)
    // private buffer: StatusData[];
    // private config: StatusLogger$Config;
    readonly fallbackListener: StatusConsoleListener;
    // private listenerLock: ReadWriteLock;
    // private listenerReadLock: Lock;
    // private listenerWriteLock: Lock;
    readonly listeners: StatusListener[];
    // private buffer(statusData: StatusData): void;
    clear(): void;
    // private createStatusData(fqcn: string, level: Level, message: Message, throwable: Throwable): StatusData;
    getFallbackListener(): StatusConsoleListener;
    getLevel(): Level;
    getListeners(): StatusListener[];
    getStatusData(): StatusData[];
    isEnabled(level: Level): boolean;
    isEnabled(messageLevel: Level, marker: Marker): boolean;
    isEnabled(level: Level, marker: Marker, message: Object, throwable: Throwable): boolean;
    isEnabled(level: Level, marker: Marker, message: CharSequence, throwable: Throwable): boolean;
    isEnabled(level: Level, marker: Marker, message: string): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): boolean;
    isEnabled(level: Level, marker: Marker, message: string, ...params: Object[]): boolean;
    isEnabled(level: Level, marker: Marker, message: string, throwable: Throwable): boolean;
    isEnabled(level: Level, marker: Marker, message: Message, throwable: Throwable): boolean;
    // private isLevelEnabled(filteringLevel: Level, messageLevel: Level): boolean;
    logMessage(fqcn: string, level: Level, marker: Marker, message: Object, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: CharSequence, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, ...params: Object[]): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, ...paramSuppliers: () => Object | null[]): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: Message, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, messageSupplier: () => Message, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, messageSupplier: () => Object | null, throwable: Throwable): void;
    logMessage(level: Level, marker: Marker, fqcn: string, location: StackTraceElement, message: Message, throwable: Throwable): void;
    // private notifyListener(listener: StatusListener, statusData: StatusData): void;
    // private notifyListeners(statusData: StatusData): void;
    registerListener(listener: StatusListener): void;
    removeListener(listener: StatusListener): void;
    reset(): void;
    setLevel(level: Level): void;
    updateListenerLevel(level: Level): void;
}