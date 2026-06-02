import type { DumperOptions$FlowStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { CollectionNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/CollectionNode.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SequenceNode extends CollectionNode<Node> {
    constructor(arg0: Tag, arg1: boolean, arg2: Node[], arg3: Mark, arg4: Mark, arg5: DumperOptions$FlowStyle)
    constructor(arg0: Tag, arg1: Node[], arg2: DumperOptions$FlowStyle)
    readonly value: Node[];
    getNodeId(): NodeId;
    getValue(): Node[];
    setListType(arg0: Class<Object>): void;
    toString(): string;
}