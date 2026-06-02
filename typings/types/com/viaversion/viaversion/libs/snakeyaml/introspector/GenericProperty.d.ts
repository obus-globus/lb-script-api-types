import type { Property } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GenericProperty extends Property {
    constructor(arg0: string, arg1: Class<Object>, arg2: Type)
    // private actualClasses: Class<Object>[];
    // private actualClassesChecked: boolean;
    // private genType: Type;
    getActualTypeArguments(): Class<Object>[];
}