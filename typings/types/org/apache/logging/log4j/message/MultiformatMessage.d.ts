import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface MultiformatMessage extends Object, Message{
    getFormat(): string;
    getFormats(): string[];
    getFormattedMessage(): string;
    getFormattedMessage(formats: string[]): string;
    getThrowable(): Throwable;
}