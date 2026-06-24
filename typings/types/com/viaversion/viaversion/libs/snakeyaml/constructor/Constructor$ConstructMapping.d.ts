import type { TypeDescription } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/TypeDescription.d.ts'
import type { Construct } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Construct.d.ts'
import type { Constructor } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Constructor.d.ts'
import type { Property } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { MappingNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/MappingNode.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Constructor$ConstructMapping extends Object implements Construct {
    constructor(null_: Constructor)
    construct(arg0: Node): Object;
    construct2ndStep(arg0: Node, arg1: Object): void;
    constructJavaBean2ndStep(arg0: MappingNode, arg1: Object): Object;
    getProperty(arg0: Class<Object>, arg1: string): Property;
    // private newInstance(arg0: TypeDescription, arg1: string, arg2: Node): Object;
}