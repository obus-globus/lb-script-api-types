import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Message } from '../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { Supplier } from '../../../../../org/apache/logging/log4j/util/Supplier.d.ts'
export interface MessageSupplier extends Object, Supplier<Message>{
    get(): Message;
}