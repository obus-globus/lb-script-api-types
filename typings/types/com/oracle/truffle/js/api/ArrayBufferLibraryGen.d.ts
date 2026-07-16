import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { FinalBitSet } from '../../../../../com/oracle/truffle/api/utilities/FinalBitSet.d.ts'
import type { ArrayBufferLibrary } from '../../../../../com/oracle/truffle/js/api/ArrayBufferLibrary.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayBufferLibraryGen extends LibraryFactory<ArrayBufferLibrary> {
    static resolve<T extends Library>(paramlibrary: Class<T>): LibraryFactory<T>;
    private constructor()
    createDelegate(delegateLibrary: ArrayBufferLibrary): ArrayBufferLibrary;
    createDispatchImpl(limit: number): ArrayBufferLibrary;
    createMessageBitSet(...messages: Message[]): FinalBitSet;
    createProxy(library: ReflectionLibrary): ArrayBufferLibrary;
    createUncachedDispatch(): ArrayBufferLibrary;
    genericDispatch(originalLib: Library, receiver: Object, message: Message, args: Object[], offset: number): Object;
    getDefaultClass(receiver: Object): Class<Object>;
    getLookup(): MethodHandles$Lookup;
}