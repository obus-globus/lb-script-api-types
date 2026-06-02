import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface MultiformatMessage extends Object, Message{
    getFormat(): string;
    getFormats(): string[];
    getFormattedMessage(formats: string[]): string;
}