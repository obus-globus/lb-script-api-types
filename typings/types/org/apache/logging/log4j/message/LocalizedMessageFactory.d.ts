import type { ResourceBundle } from '../../../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    newMessage(key: string): Message;
    newMessage(key: string, params: Object[]): Message;
}