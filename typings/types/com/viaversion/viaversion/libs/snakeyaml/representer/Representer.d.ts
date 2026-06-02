import type { DumperOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions.d.ts'
import type { TypeDescription } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/TypeDescription.d.ts'
import type { Property } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { PropertyUtils } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/PropertyUtils.d.ts'
import type { MappingNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/MappingNode.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeTuple.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { SafeRepresenter } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/SafeRepresenter.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Representer extends SafeRepresenter {
    constructor(arg0: DumperOptions)
    // private typeDefinitions: Map<Class<Object>, TypeDescription>;
    addTypeDescription(arg0: TypeDescription): TypeDescription;
    checkGlobalTag(arg0: Property, arg1: Node, arg2: Object): void;
    getProperties(arg0: Class<Object>): Property[];
    representJavaBean(arg0: Property[], arg1: Object): MappingNode;
    representJavaBeanProperty(arg0: Object, arg1: Property, arg2: Object, arg3: Tag): NodeTuple;
    // private resetTag(arg0: Class<Object>, arg1: Node): void;
    setPropertyUtils(arg0: PropertyUtils): void;
}