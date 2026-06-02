import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
export class AnchorNode extends Node {
    constructor(arg0: Node)
    readonly realNode: Node;
    getNodeId(): NodeId;
    getRealNode(): Node;
}