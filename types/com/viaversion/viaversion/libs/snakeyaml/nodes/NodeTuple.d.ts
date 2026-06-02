import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NodeTuple extends Object {
    constructor(arg0: Node, arg1: Node)
    readonly keyNode: Node;
    readonly valueNode: Node;
    getKeyNode(): Node;
    getValueNode(): Node;
    toString(): string;
}