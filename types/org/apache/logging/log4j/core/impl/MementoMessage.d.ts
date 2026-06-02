import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringBuilderFormattable } from '../../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class MementoMessage extends Object implements Message, StringBuilderFormattable {
    constructor(formattedMessage: string, format: string, parameters: Object[])
    readonly format: string;
    readonly formattedMessage: string;
    readonly parameters: Object[];
    formatTo(buffer: StringBuilder): void;
    getFormat(): string;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
    toString(): string;
}