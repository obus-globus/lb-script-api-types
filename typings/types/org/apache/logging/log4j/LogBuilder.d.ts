import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { Message } from '../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { Supplier } from '../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export interface LogBuilder extends Object {
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
    log(message: string, ...params: Object[]): void;
    log(message: string, params: () => Object | null[]): void;
    log(message: Message): void;
    log(messageSupplier: () => Message): void;
    logAndGet(messageSupplier: () => Message): Message;
    withLocation(): LogBuilder;
    withLocation(location: StackTraceElement): LogBuilder;
    withMarker(marker: Marker): LogBuilder;
    withThrowable(throwable: Throwable): LogBuilder;
}