import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AnchorGenerator extends Object{
    nextAnchor(arg0: Node): string;
}