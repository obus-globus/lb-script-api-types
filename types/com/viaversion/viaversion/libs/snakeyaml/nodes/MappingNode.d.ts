import type { DumperOptions$FlowStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { CollectionNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/CollectionNode.d.ts'
import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
import type { NodeTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeTuple.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MappingNode extends CollectionNode<NodeTuple> {
    constructor(arg0: Tag, arg1: boolean, arg2: NodeTuple[], arg3: Mark, arg4: Mark, arg5: DumperOptions$FlowStyle)
    constructor(arg0: Tag, arg1: NodeTuple[], arg2: DumperOptions$FlowStyle)
    readonly merged: boolean;
    readonly value: NodeTuple[];
    getNodeId(): NodeId;
    getValue(): NodeTuple[];
    isMerged(): boolean;
    setMerged(arg0: boolean): void;
    setOnlyKeyType(arg0: Class<Object>): void;
    setTypes(arg0: Class<Object>, arg1: Class<Object>): void;
    setValue(arg0: NodeTuple[]): void;
    toString(): string;
}