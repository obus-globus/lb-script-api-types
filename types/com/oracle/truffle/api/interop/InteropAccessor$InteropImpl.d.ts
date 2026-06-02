import type { Accessor$InteropSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$InteropSupport.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InteropAccessor$InteropImpl extends Accessor$InteropSupport {
    constructor()
    checkInteropType(result: Object): void;
    createDefaultIterator(receiver: Object): Object;
    createDefaultNodeObject(node: Node): Object;
    createDispatchedInteropLibrary(limit: number): Node;
    getUncachedInteropLibrary(): Node;
    isExecutableObject(value: Object): boolean;
    isScopeObject(receiver: Object): boolean;
    isTruffleObject(value: Object): boolean;
    unboxPointer(library: Node, value: Object): number;
}