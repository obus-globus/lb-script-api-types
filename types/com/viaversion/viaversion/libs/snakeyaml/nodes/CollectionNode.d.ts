import type { DumperOptions$FlowStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CollectionNode<T extends Object | number | string | boolean> extends Node {
    constructor(arg0: Tag, arg1: Mark, arg2: Mark, arg3: DumperOptions$FlowStyle)
    readonly flowStyle: DumperOptions$FlowStyle;
    getFlowStyle(): DumperOptions$FlowStyle;
    getValue(): T[];
    setEndMark(arg0: Mark): void;
    setFlowStyle(arg0: DumperOptions$FlowStyle): void;
}