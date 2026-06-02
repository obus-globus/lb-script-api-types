import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NodeLibrary extends Library {
    static getFactory(): LibraryFactory<NodeLibrary>;
    static getUncached(): NodeLibrary;
    static getUncached(paramnode: Object): NodeLibrary;
    constructor()
    getReceiverMember(node: Object, frame: Frame): Object;
    getRootInstance(node: Object, frame: Frame): Object;
    getScope(node: Object, frame: Frame, nodeEnter: boolean): Object;
    getView(node: Object, frame: Frame, value: Object): Object;
    hasReceiverMember(node: Object, frame: Frame): boolean;
    hasRootInstance(node: Object, frame: Frame): boolean;
    hasScope(node: Object, frame: Frame): boolean;
}