import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Message } from '../../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { UnadoptableNode } from '../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectionLibraryGen$UncachedDispatch extends ReflectionLibrary implements UnadoptableNode {
    static getFactory(): LibraryFactory<ReflectionLibrary>;
    static getUncached(): ReflectionLibrary;
    static getUncached(paramv: Object): ReflectionLibrary;
    private constructor()
    accepts(receiver_: Object): boolean;
    send(receiver_: Object, message: Message, args: Object[]): Object;
}