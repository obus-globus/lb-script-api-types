import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayBufferLibraryGen$MessageImpl extends Message {
    static resolve(paramlibraryClass: Class<Library>, parammessageName: string): Message;
    static resolve(paramlibraryClass: Class<Library>, parammessageName: string, paramfail: boolean): Message;
    static resolveExact(paramlibraryClass: Class<Library>, parammessageName: string, paramfail: boolean, ...paramargumentTypes: Class<Object>[]): Message;
    static resolveExact(paramlibraryClass: Class<Library>, parammessageName: string, ...paramargumentTypes: Class<Object>[]): Message;
    constructor(name: string, index: number, deprecated: boolean, returnType: Class<Object>, ...parameters: Class<Object>[])
}