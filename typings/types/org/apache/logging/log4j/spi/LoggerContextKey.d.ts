import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
export class LoggerContextKey extends Object {
    static create(paramname: string): string;
    static create(paramname: string, parammessageFactoryClass: Class<Object>): string;
    static create(paramname: string, parammessageFactory: MessageFactory): string;
    constructor()
}