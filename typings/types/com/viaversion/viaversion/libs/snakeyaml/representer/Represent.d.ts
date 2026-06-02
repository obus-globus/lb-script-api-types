import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Represent extends Object{
    representData(arg0: Object): Node;
}