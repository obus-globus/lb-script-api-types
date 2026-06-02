import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { FinalBitSet } from '../../../../../com/oracle/truffle/api/utilities/FinalBitSet.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPLibrary } from '../../../../../org/graalvm/tools/api/lsp/LSPLibrary.d.ts'
export class LSPLibraryGen extends LibraryFactory<LSPLibrary> {
    static resolve(paramlibrary: Class<Object>): LibraryFactory<Object>;
    private constructor()
    createAssertions(delegate: LSPLibrary): LSPLibrary;
    createDelegate(delegateLibrary: LSPLibrary): LSPLibrary;
    createDispatchImpl(limit: number): LSPLibrary;
    createMessageBitSet(messages: Message[]): FinalBitSet;
    createProxy(library: ReflectionLibrary): LSPLibrary;
    createUncachedDispatch(): LSPLibrary;
    genericDispatch(originalLib: Library, receiver: Object, message: Message, args: Object[], offset: number): Object;
    getDefaultClass(receiver: Object): Class<Object>;
    getLookup(): MethodHandles$Lookup;
}