import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogBuilder } from '../../../../../org/apache/logging/log4j/LogBuilder.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Appender } from '../../../../../org/apache/logging/log4j/core/Appender.d.ts'
import type { Filter } from '../../../../../org/apache/logging/log4j/core/Filter.d.ts'
import type { Logger$PrivateConfig } from '../../../../../org/apache/logging/log4j/core/Logger$PrivateConfig.d.ts'
import type { LoggerContext } from '../../../../../org/apache/logging/log4j/core/LoggerContext.d.ts'
import type { Configuration } from '../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { LoggerConfig } from '../../../../../org/apache/logging/log4j/core/config/LoggerConfig.d.ts'
import type { FlowMessageFactory } from '../../../../../org/apache/logging/log4j/message/FlowMessageFactory.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { AbstractLogger } from '../../../../../org/apache/logging/log4j/spi/AbstractLogger.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { MessageSupplier } from '../../../../../org/apache/logging/log4j/util/MessageSupplier.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class Logger extends AbstractLogger implements Supplier<LoggerConfig> {
    static CATCHING_MARKER: Marker;
    static DEFAULT_FLOW_MESSAGE_FACTORY_CLASS: Class<FlowMessageFactory>;
    static DEFAULT_MESSAGE_FACTORY_CLASS: Class<MessageFactory>;
    static ENTRY_MARKER: Marker;
    static EXCEPTION_MARKER: Marker;
    static EXIT_MARKER: Marker;
    static FLOW_MARKER: Marker;
    static THROWING_MARKER: Marker;
    static checkMessageFactory(paramlogger: ExtendedLogger, parammessageFactory: MessageFactory): void;
    static getRecursionDepth(): number;
    constructor(context: LoggerContext, name: string, messageFactory: MessageFactory)
    constructor(context: LoggerContext, name: string, messageFactory: MessageFactory, flowMessageFactory: FlowMessageFactory)
    readonly context: LoggerContext;
    // private privateConfig: Logger$PrivateConfig;
    addAppender(appender: Appender): void;
    addFilter(filter: Filter): void;
    atLevel(level: Level): LogBuilder;
    equals(o: Object | null): boolean;
    filterCount(): number;
    get(): LoggerConfig;
    getAppenders(): { [key: string]: Appender };
    getContext(): LoggerContext;
    getFilters(): Iterator<Filter>;
    getLevel(): Level;
    getParent(): Logger;
    hashCode(): number;
    isAdditive(): boolean;
    isEnabled(level: Level): boolean;
    isEnabled(level: Level, marker: Marker): boolean;
    isEnabled(level: Level, marker: Marker, message: Object, t: Throwable): boolean;
    isEnabled(level: Level, marker: Marker, message: CharSequence, t: Throwable): boolean;
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
    isEnabled(level: Level, marker: Marker, message: string, t: Throwable): boolean;
    isEnabled(level: Level, marker: Marker, message: Message, t: Throwable): boolean;
    log(level: Level, message: Object): void;
    log(level: Level, message: Object, throwable: Throwable): void;
    log(level: Level, message: CharSequence): void;
    log(level: Level, message: CharSequence, throwable: Throwable): void;
    log(level: Level, message: string): void;
    log(level: Level, message: string, p0: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): void;
    log(level: Level, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): void;
    log(level: Level, message: string, ...params: Object[]): void;
    log(level: Level, message: string, paramSuppliers: () => Object | null[]): void;
    log(level: Level, message: string, throwable: Throwable): void;
    log(level: Level, marker: Marker, message: Object): void;
    log(level: Level, marker: Marker, message: Object, throwable: Throwable): void;
    log(level: Level, marker: Marker, message: CharSequence): void;
    log(level: Level, marker: Marker, message: CharSequence, throwable: Throwable): void;
    log(level: Level, marker: Marker, message: string): void;
    log(level: Level, marker: Marker, fqcn: string, location: StackTraceElement, message: Message, throwable: Throwable): void;
    log(level: Level, marker: Marker, message: string, p0: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): void;
    log(level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): void;
    log(level: Level, marker: Marker, message: string, ...params: Object[]): void;
    log(level: Level, marker: Marker, message: string, paramSuppliers: () => Object | null[]): void;
    log(level: Level, marker: Marker, message: string, throwable: Throwable): void;
    log(level: Level, marker: Marker, message: Message): void;
    log(level: Level, marker: Marker, message: Message, throwable: Throwable): void;
    log(level: Level, marker: Marker, messageSupplier: () => Message): void;
    log(level: Level, marker: Marker, messageSupplier: () => Message, throwable: Throwable): void;
    log(level: Level, marker: Marker, messageSupplier: () => Object | null): void;
    log(level: Level, marker: Marker, messageSupplier: () => Object | null, throwable: Throwable): void;
    log(level: Level, message: Message): void;
    log(level: Level, message: Message, throwable: Throwable): void;
    log(level: Level, messageSupplier: () => Message): void;
    log(level: Level, messageSupplier: () => Message, throwable: Throwable): void;
    log(level: Level, messageSupplier: () => Object | null): void;
    log(level: Level, messageSupplier: () => Object | null, throwable: Throwable): void;
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
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, paramSuppliers: () => Object | null[]): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: string, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: Message, t: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, messageSupplier: () => Message, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, messageSupplier: () => Object | null, throwable: Throwable): void;
    logMessage(level: Level, marker: Marker, fqcn: string, location: StackTraceElement, message: Message, throwable: Throwable): void;
    removeAppender(appender: Appender): void;
    requiresLocation(): boolean;
    setAdditive(additive: boolean): void;
    setLevel(level: Level): void;
    toString(): string;
    updateConfiguration(newConfig: Configuration): void;
    writeReplace(): Object;
}