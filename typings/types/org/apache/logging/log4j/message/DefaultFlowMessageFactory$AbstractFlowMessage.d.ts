import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FlowMessage } from '../../../../../org/apache/logging/log4j/message/FlowMessage.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringBuilderFormattable } from '../../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class DefaultFlowMessageFactory$AbstractFlowMessage extends Object implements FlowMessage, StringBuilderFormattable {
    constructor(text: string, message: Message)
    readonly message: Message;
    readonly text: string;
    formatTo(buffer: StringBuilder): void;
    getFormat(): string;
    getFormattedMessage(): string;
    getMessage(): Message;
    getParameters(): Object[];
    getText(): string;
    getThrowable(): Throwable;
}