import type { DumperOptions$ScalarStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$ScalarStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
export class ScalarNode extends Node {
    constructor(arg0: Tag, arg1: boolean, arg2: string, arg3: Mark, arg4: Mark, arg5: DumperOptions$ScalarStyle)
    constructor(arg0: Tag, arg1: string, arg2: Mark, arg3: Mark, arg4: DumperOptions$ScalarStyle)
    // private style: DumperOptions$ScalarStyle;
    readonly value: string;
    getNodeId(): NodeId;
    getScalarStyle(): DumperOptions$ScalarStyle;
    getValue(): string;
    isPlain(): boolean;
    toString(): string;
}