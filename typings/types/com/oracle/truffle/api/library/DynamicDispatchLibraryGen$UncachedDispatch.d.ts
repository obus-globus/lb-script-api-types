import type { DynamicDispatchLibrary } from '../../../../../com/oracle/truffle/api/library/DynamicDispatchLibrary.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { UnadoptableNode } from '../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicDispatchLibraryGen$UncachedDispatch extends DynamicDispatchLibrary implements UnadoptableNode {
    static getFactory(): LibraryFactory<DynamicDispatchLibrary>;
    private constructor()
    accepts(receiver_: Object): boolean;
    cast(receiver: Object): Object;
    dispatch(receiver_: Object): Class<Object>;
}