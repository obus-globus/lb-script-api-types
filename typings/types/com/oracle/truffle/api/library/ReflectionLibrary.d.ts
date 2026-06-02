import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ReflectionLibrary extends Library {
    static getFactory(): LibraryFactory<ReflectionLibrary>;
    static getUncached(): ReflectionLibrary;
    static getUncached(paramv: Object): ReflectionLibrary;
    constructor()
    send(receiver: Object, message: Message, args: Object[]): Object;
}