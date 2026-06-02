import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { BridgeAware } from '../../../../../org/apache/logging/log4j/BridgeAware.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogBuilder } from '../../../../../org/apache/logging/log4j/LogBuilder.d.ts'
import type { Marker } from '../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class DefaultLogBuilder extends Object implements BridgeAware, LogBuilder {
    static NOOP: LogBuilder;
    constructor()
    constructor(logger: ExtendedLogger, level: Level)
    // private fqcn: string;
    readonly inUse: boolean;
    // private level: Level;
    // private location: StackTraceElement;
    // private logger: ExtendedLogger;
    // private marker: Marker;
    // private threadId: number;
    // private throwable: Throwable;
    isEnabled(message: Object): boolean;
    isEnabled(message: CharSequence): boolean;
    isEnabled(message: string): boolean;
    isEnabled(message: string, p0: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): boolean;
    isEnabled(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): boolean;
    isEnabled(message: string, params: Object[]): boolean;
    isEnabled(message: Message): boolean;
    isInUse(): boolean;
    // private isValid(): boolean;
    log(): void;
    log(message: Object): void;
    log(message: CharSequence): void;
    log(message: string): void;
    log(message: string, p0: Object): void;
    log(message: string, p0: Object, p1: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): void;
    log(message: string, params: Object[]): void;
    log(message: string, params: () => Object | null[]): void;
    log(message: Message): void;
    log(messageSupplier: () => Message): void;
    log(): void;
    log(message: Object): void;
    log(message: CharSequence): void;
    log(message: string): void;
    log(message: string, p0: Object): void;
    log(message: string, p0: Object, p1: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): void;
    log(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): void;
    log(message: string, params: Object[]): void;
    log(message: string, params: () => Object | null[]): void;
    log(message: Message): void;
    log(messageSupplier: () => Message): void;
    logAndGet(messageSupplier: () => Message): Message;
    logAndGet(messageSupplier: () => Message): Message;
    // private logMessage(message: Message): void;
    reset(logger: ExtendedLogger, level: Level): LogBuilder;
    setEntryPoint(fqcn: string): void;
    withLocation(): LogBuilder;
    withLocation(location: StackTraceElement): LogBuilder;
    withLocation(): LogBuilder;
    withLocation(location: StackTraceElement): LogBuilder;
    withMarker(marker: Marker): LogBuilder;
    withMarker(marker: Marker): LogBuilder;
    withThrowable(throwable: Throwable): LogBuilder;
    withThrowable(throwable: Throwable): LogBuilder;
}