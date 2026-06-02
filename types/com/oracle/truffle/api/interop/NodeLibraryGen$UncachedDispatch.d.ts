import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { NodeLibrary } from '../../../../../com/oracle/truffle/api/interop/NodeLibrary.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { UnadoptableNode } from '../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeLibraryGen$UncachedDispatch extends NodeLibrary implements UnadoptableNode {
    static getFactory(): LibraryFactory<NodeLibrary>;
    static getUncached(): NodeLibrary;
    static getUncached(paramnode: Object): NodeLibrary;
    private constructor()
    accepts(receiver_: Object): boolean;
    getReceiverMember(receiver_: Object, frame: Frame): Object;
    getRootInstance(receiver_: Object, frame: Frame): Object;
    getScope(receiver_: Object, frame: Frame, nodeEnter: boolean): Object;
    getView(receiver_: Object, frame: Frame, value: Object): Object;
    hasReceiverMember(receiver_: Object, frame: Frame): boolean;
    hasRootInstance(receiver_: Object, frame: Frame): boolean;
    hasScope(receiver_: Object, frame: Frame): boolean;
}