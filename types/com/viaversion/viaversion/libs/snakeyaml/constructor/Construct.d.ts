import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Construct extends Object{
    construct(arg0: Node): Object;
    construct2ndStep(arg0: Node, arg1: Object): void;
}