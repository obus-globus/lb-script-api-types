import type { Property } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/Property.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MissingProperty extends Property {
    constructor(arg0: string)
    get(arg0: Object): Object;
    getActualTypeArguments(): Class<Object>[];
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotations(): Annotation[];
    set(arg0: Object, arg1: Object): void;
}