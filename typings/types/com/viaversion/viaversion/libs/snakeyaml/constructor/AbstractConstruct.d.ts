import type { Construct } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Construct.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractConstruct extends Object implements Construct {
    constructor()
    construct(arg0: Node): Object;
    construct2ndStep(arg0: Node, arg1: Object): void;
}