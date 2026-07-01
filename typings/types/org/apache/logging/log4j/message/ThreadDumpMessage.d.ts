import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { ThreadInformation } from '../../../../../org/apache/logging/log4j/message/ThreadInformation.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class ThreadDumpMessage extends Object implements Message, StringBuilderFormattable {
    constructor(title: string)
    constructor(arg0: string, arg1: string, arg2: any)
    readonly formattedMessage: string;
    // private threads: Map<ThreadInformation, StackTraceElement[]>;
    // private title: string;
    formatTo(sb: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
    // private readObject(stream: ObjectInputStream): void;
    toString(): string;
    writeReplace(): Object;
}