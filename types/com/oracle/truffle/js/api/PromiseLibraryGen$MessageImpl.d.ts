import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PromiseLibraryGen$MessageImpl extends Message {
    static resolve(paramlibraryClass: Class<Object>, parammessageName: string): Message;
    static resolve(paramlibraryClass: Class<Object>, parammessageName: string, paramfail: boolean): Message;
    constructor(name: string, index: number, deprecated: boolean, returnType: Class<Object>, parameters: Class<Object>[])
}