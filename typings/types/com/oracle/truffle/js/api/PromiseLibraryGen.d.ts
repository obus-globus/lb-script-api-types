import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { FinalBitSet } from '../../../../../com/oracle/truffle/api/utilities/FinalBitSet.d.ts'
import type { PromiseLibrary } from '../../../../../com/oracle/truffle/js/api/PromiseLibrary.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PromiseLibraryGen extends LibraryFactory<PromiseLibrary> {
    static resolve(paramlibrary: Class<Library>): LibraryFactory<Library>;
    private constructor()
    createDelegate(delegateLibrary: PromiseLibrary): PromiseLibrary;
    createDispatchImpl(limit: number): PromiseLibrary;
    createMessageBitSet(...messages: Message[]): FinalBitSet;
    createProxy(library: ReflectionLibrary): PromiseLibrary;
    createUncachedDispatch(): PromiseLibrary;
    genericDispatch(originalLib: Library, receiver: Object, message: Message, args: Object[], offset: number): Object;
    getDefaultClass(receiver: Object): Class<Object>;
    getLookup(): MethodHandles$Lookup;
}