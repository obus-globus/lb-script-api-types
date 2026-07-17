import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { DumperOptions$FlowStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { DumperOptions$ScalarStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$ScalarStyle.d.ts'
import type { PropertyUtils } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/PropertyUtils.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Represent } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/Represent.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class BaseRepresenter extends Object {
    constructor()
    defaultFlowStyle: DumperOptions$FlowStyle;
    defaultScalarStyle: DumperOptions$ScalarStyle;
    readonly explicitPropertyUtils: boolean;
    // private multiRepresenters: JavaMap<Class<Object>, Represent>;
    // private nullRepresenter: Represent;
    // private objectToRepresent: Object;
    readonly propertyUtils: PropertyUtils;
    // private representedObjects: JavaMap<Object, Node>;
    // private representers: JavaMap<Class<Object>, Represent>;
    getDefaultFlowStyle(): DumperOptions$FlowStyle;
    getDefaultScalarStyle(): DumperOptions$ScalarStyle;
    getPropertyUtils(): PropertyUtils;
    isExplicitPropertyUtils(): boolean;
    represent(arg0: Object): Node;
    representData(arg0: Object): Node;
    representMapping(arg0: Tag, arg1: JavaMap<Object | null, Object | null>, arg2: DumperOptions$FlowStyle): Node;
    representScalar(arg0: Tag, arg1: string): Node;
    representScalar(arg0: Tag, arg1: string, arg2: DumperOptions$ScalarStyle): Node;
    representSequence(arg0: Tag, arg1: (Object | null)[], arg2: DumperOptions$FlowStyle): Node;
    setDefaultFlowStyle(arg0: DumperOptions$FlowStyle): void;
    setDefaultScalarStyle(arg0: DumperOptions$ScalarStyle): void;
    setPropertyUtils(arg0: PropertyUtils): void;
}