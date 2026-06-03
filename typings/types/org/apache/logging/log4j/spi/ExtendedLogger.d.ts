import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogBuilder } from '../../../../../org/apache/logging/log4j/LogBuilder.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { MessageSupplier } from '../../../../../org/apache/logging/log4j/util/MessageSupplier.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export interface ExtendedLogger extends Object, Logger{
    always(): LogBuilder;
    atDebug(): LogBuilder;
    atError(): LogBuilder;
    atFatal(): LogBuilder;
    atInfo(): LogBuilder;
    atLevel(level: Level): LogBuilder;
    atTrace(): LogBuilder;
    atWarn(): LogBuilder;
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
    isEnabled(level: Level, marker: Marker, message: string, params: Object[]): boolean;
    isEnabled(level: Level, marker: Marker, message: string, t: Throwable): boolean;
    isEnabled(level: Level, marker: Marker, message: Message, t: Throwable): boolean;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: Object, t: Throwable): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: CharSequence, t: Throwable): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, params: Object[]): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, paramSuppliers: () => Object | null[]): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: string, t: Throwable): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, message: Message, t: Throwable): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, msgSupplier: () => org.apache.logging.log4j.message.Message, t: Throwable): void;
    logIfEnabled(fqcn: string, level: Level, marker: Marker, msgSupplier: () => Object | null, t: Throwable): void;
    logMessage(level: Level, marker: Marker, fqcn: string, location: StackTraceElement, message: Message, throwable: Throwable): void;
    logMessage(fqcn: string, level: Level, marker: Marker, message: Message, t: Throwable): void;
    logMessage(level: Level, marker: Marker, fqcn: string, location: StackTraceElement, message: Message, throwable: Throwable): void;
}