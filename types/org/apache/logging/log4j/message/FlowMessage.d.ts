import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface FlowMessage extends Object, Message{
    getFormat(): string;
    getMessage(): Message;
    getText(): string;
}