import type { Construct } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Construct.d.ts'
import type { Constructor } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Constructor.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Constructor$ConstructSequence extends Object implements Construct {
    constructor(null_: Constructor)
    construct(arg0: Node): Object;
    construct2ndStep(arg0: Node, arg1: Object): void;
    // private wrapIfPrimitive(arg0: Class<Object>): Class<Object>;
}