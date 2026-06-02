import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class ParameterizedNoReferenceMessageFactory$StatusMessage extends Object implements Message {
    constructor(formattedMessage: string, throwable: Throwable)
    readonly formattedMessage: string;
    readonly throwable: Throwable;
    getFormat(): string;
    getFormat(): string;
    getFormattedMessage(): string;
    getParameters(): Object[];
    getThrowable(): Throwable;
}