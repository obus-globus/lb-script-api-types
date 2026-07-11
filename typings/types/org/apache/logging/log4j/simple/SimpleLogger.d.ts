import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { DateFormat } from '../../../../../java/text/DateFormat.d.ts'
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
import type { MessageSupplier } from '../../../../../org/apache/logging/log4j/util/MessageSupplier.d.ts'
import type { PropertiesUtil } from '../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class SimpleLogger extends AbstractLogger {
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
    constructor(name: string, defaultLevel: Level, showLogName: boolean, showShortLogName: boolean, showDateTime: boolean, showContextMap: boolean, dateTimeFormat: string, messageFactory: MessageFactory, props: PropertiesUtil, stream: PrintStream)
    // private dateFormatter: DateFormat;
    readonly level: Level;
    // private logName: string;
    // private showContextMap: boolean;
    // private showDateTime: boolean;
    readonly stream: PrintStream;
    getLevel(): Level;
    isEnabled(level: Level): boolean;
    isEnabled(level: Level, marker: Marker): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: Object, t: Throwable): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: CharSequence, t: Throwable): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: string): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: string, ...p1: Object[]): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: string, t: Throwable): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: Message, t: Throwable): boolean;
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
    logMessage(fqcn: string, mgsLevel: Level, marker: Marker, msg: Message, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, messageSupplier: () => Message, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, messageSupplier: () => Object | null, throwable: Throwable): void;
    logMessage(level: Level, marker: Marker, fqcn: string, location: StackTraceElement, message: Message, throwable: Throwable): void;
    setLevel(level: Level): void;
    setStream(stream: PrintStream): void;
}