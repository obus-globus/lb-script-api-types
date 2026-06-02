import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractMessageFactory } from '../../../../../org/apache/logging/log4j/message/AbstractMessageFactory.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class ParameterizedNoReferenceMessageFactory extends AbstractMessageFactory {
    static INSTANCE: ParameterizedNoReferenceMessageFactory;
    constructor()
    newMessage(message: string, params: Object[]): Message;
}