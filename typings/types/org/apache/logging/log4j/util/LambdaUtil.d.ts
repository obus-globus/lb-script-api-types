import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { MessageSupplier } from '../../../../../org/apache/logging/log4j/util/MessageSupplier.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export class LambdaUtil extends Object {
    static get(paramsupplier: () => Object): Object;
    static get(paramsupplier: () => Message): Message;
    static getAll(...paramsuppliers: Object | null): (Object | null)[];
    static getMessage(paramsupplier: () => Object, parammessageFactory: MessageFactory): Message;
    private constructor()
}