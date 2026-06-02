import type { MappingNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/MappingNode.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeTuple.d.ts'
import type { Tuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/Tuple.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class MergeUtils extends Object {
    constructor()
    asMappingNode(arg0: Node): MappingNode;
    // private filter(arg0: NodeTuple[], arg1: string[]): Tuple<NodeTuple[], string[]>;
    flatten(arg0: MappingNode): NodeTuple[];
}