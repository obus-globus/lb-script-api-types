import type { NodeLibrary } from '../../../../../com/oracle/truffle/api/interop/NodeLibrary.d.ts'
import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { FinalBitSet } from '../../../../../com/oracle/truffle/api/utilities/FinalBitSet.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeLibraryGen extends LibraryFactory<NodeLibrary> {
    static resolve<T extends Library>(paramlibrary: Class<T>): LibraryFactory<T>;
    private constructor()
    createAssertions(delegate: NodeLibrary): NodeLibrary;
    createDelegate(delegateLibrary: NodeLibrary): NodeLibrary;
    createDispatchImpl(limit: number): NodeLibrary;
    createMessageBitSet(...messages: Message[]): FinalBitSet;
    createProxy(library: ReflectionLibrary): NodeLibrary;
    createUncachedDispatch(): NodeLibrary;
    genericDispatch(originalLib: Library, receiver: Object, message: Message, args: Object[], offset: number): Object;
    getDefaultClass(receiver: Object): Class<Object>;
    getLookup(): MethodHandles$Lookup;
}