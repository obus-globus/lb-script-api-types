import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { MessageFactory2 } from '../../../../../org/apache/logging/log4j/message/MessageFactory2.d.ts'
import type { ReusableObjectMessage } from '../../../../../org/apache/logging/log4j/message/ReusableObjectMessage.d.ts'
import type { ReusableParameterizedMessage } from '../../../../../org/apache/logging/log4j/message/ReusableParameterizedMessage.d.ts'
import type { ReusableSimpleMessage } from '../../../../../org/apache/logging/log4j/message/ReusableSimpleMessage.d.ts'
export class ReusableMessageFactory extends Object implements Serializable, MessageFactory2 {
    static INSTANCE: ReusableMessageFactory;
    static release(parammessage: Message): void;
    constructor()
    // private threadLocalObjectMessage: ThreadLocal<ReusableObjectMessage>;
    // private threadLocalParameterized: ThreadLocal<ReusableParameterizedMessage>;
    // private threadLocalSimpleMessage: ThreadLocal<ReusableSimpleMessage>;
    // private getObject(): ReusableObjectMessage;
    // private getParameterized(): ReusableParameterizedMessage;
    // private getSimple(): ReusableSimpleMessage;
    newMessage(message: Object): Message;
    newMessage(charSequence: CharSequence): Message;
    newMessage(message: string): Message;
    newMessage(message: string, p0: Object): Message;
    newMessage(message: string, p0: Object, p1: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object): Message;
    newMessage(message: string, p0: Object, p1: Object, p2: Object, p3: Object, p4: Object, p5: Object, p6: Object, p7: Object, p8: Object, p9: Object): Message;
    newMessage(message: string, params: Object[]): Message;
    // private writeReplace(): Object;
}