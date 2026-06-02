import type { PrintStream } from '../../../../../java/io/PrintStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { DateFormat } from '../../../../../java/text/DateFormat.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { AbstractLogger } from '../../../../../org/apache/logging/log4j/spi/AbstractLogger.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { PropertiesUtil } from '../../../../../org/apache/logging/log4j/util/PropertiesUtil.d.ts'
export class SimpleLogger extends AbstractLogger {
    static CATCHING_MARKER: Marker;
    static DEFAULT_FLOW_MESSAGE_FACTORY_CLASS: Class<Object>;
    static DEFAULT_MESSAGE_FACTORY_CLASS: Class<Object>;
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
    isEnabled(testLevel: Level, marker: Marker, msg: string, p1: Object[]): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: string, t: Throwable): boolean;
    isEnabled(testLevel: Level, marker: Marker, msg: Message, t: Throwable): boolean;
    logMessage(fqcn: string, mgsLevel: Level, marker: Marker, msg: Message, throwable: Throwable): void;
    setLevel(level: Level): void;
    setStream(stream: PrintStream): void;
}