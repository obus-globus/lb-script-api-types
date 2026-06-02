import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { AnchorGenerator } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/serializer/AnchorGenerator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NumberAnchorGenerator extends Object implements AnchorGenerator {
    constructor(arg0: number)
    // private lastAnchorId: number;
    nextAnchor(arg0: Node): string;
}