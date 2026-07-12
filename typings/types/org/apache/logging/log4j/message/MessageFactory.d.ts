import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export interface MessageFactory extends Object{
    newMessage(message: Object): Message;
    newMessage(message: string): Message;
    newMessage(message: string, ...params: Object[]): Message;
}