import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { NodeLibrary } from '../../../../../com/oracle/truffle/api/interop/NodeLibrary.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NodeLibraryGen$Proxy extends NodeLibrary {
    static getFactory(): LibraryFactory<NodeLibrary>;
    static getUncached(): NodeLibrary;
    static getUncached(paramnode: Object): NodeLibrary;
    constructor(lib: ReflectionLibrary)
    // private lib: ReflectionLibrary;
    accepts(receiver_: Object): boolean;
    getReceiverMember(receiver_: Object, frame: Frame): Object;
    getRootInstance(receiver_: Object, frame: Frame): Object;
    getScope(receiver_: Object, frame: Frame, nodeEnter: boolean): Object;
    getView(receiver_: Object, frame: Frame, value: Object): Object;
    hasReceiverMember(receiver_: Object, frame: Frame): boolean;
    hasRootInstance(receiver_: Object, frame: Frame): boolean;
    hasScope(receiver_: Object, frame: Frame): boolean;
}