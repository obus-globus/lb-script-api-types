import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Instant } from '../../../../../java/time/Instant.d.ts'
import type { DateTimeFormatter } from '../../../../../java/time/format/DateTimeFormatter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class StatusData extends Object implements Serializable {
    constructor(caller: StackTraceElement, level: Level, message: Message, throwable: Throwable, threadName: string)
    constructor(caller: StackTraceElement, level: Level, message: Message, throwable: Throwable, threadName: string, instantFormatter: DateTimeFormatter, instant: Instant)
    // private caller: StackTraceElement;
    readonly instant: Instant;
    // private instantFormatter: DateTimeFormatter;
    readonly level: Level;
    readonly message: Message;
    readonly threadName: string;
    readonly throwable: Throwable;
    getFormattedStatus(): string;
    getInstant(): Instant;
    getLevel(): Level;
    getMessage(): Message;
    getStackTraceElement(): StackTraceElement;
    getThreadName(): string;
    getThrowable(): Throwable;
    getTimestamp(): number;
    toString(): string;
}