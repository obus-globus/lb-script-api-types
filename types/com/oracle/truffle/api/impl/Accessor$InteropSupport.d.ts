import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$InteropSupport extends Accessor$Support {
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