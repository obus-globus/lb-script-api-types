import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ReflectionLibraryGen$CachedDispatch extends ReflectionLibrary {
    static getFactory(): LibraryFactory<ReflectionLibrary>;
    static getUncached(): ReflectionLibrary;
    static getUncached(paramv: Object): ReflectionLibrary;
    constructor(library: ReflectionLibrary, next: ReflectionLibraryGen$CachedDispatch)
    // private library: ReflectionLibrary;
    // private next: ReflectionLibraryGen$CachedDispatch;
    accepts(receiver_: Object): boolean;
    getLimit(): number;
    send(receiver_: Object, message: Message, ...args: Object[]): Object;
    // private specialize(receiver_: Object): void;
}