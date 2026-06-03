import type { ResourceBundle } from '../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractMessageFactory } from '../../../../../org/apache/logging/log4j/message/AbstractMessageFactory.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
export class LocalizedMessageFactory extends AbstractMessageFactory {
    constructor(resourceBundle: ResourceBundle)
    constructor(baseName: string)
    readonly baseName: string;
    readonly resourceBundle: ResourceBundle;
    equals(object: Object | null): boolean;
    getBaseName(): string;
    getResourceBundle(): ResourceBundle;
    hashCode(): number;
    newMessage(message: Object): Message;
    newMessage(message: CharSequence): Message;
    newMessage(key: string): Message;
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
    newMessage(key: string, params: Object[]): Message;
}