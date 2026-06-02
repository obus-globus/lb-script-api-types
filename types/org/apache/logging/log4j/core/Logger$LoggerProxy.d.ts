import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
export class Logger$LoggerProxy extends Object implements Serializable {
    constructor(name: string, messageFactory: MessageFactory)
    // private messageFactory: MessageFactory;
    // private name: string;
    readResolve(): Object;
}