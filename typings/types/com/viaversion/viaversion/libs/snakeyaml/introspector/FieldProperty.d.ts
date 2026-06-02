import type { GenericProperty } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/GenericProperty.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../java/lang/reflect/Field.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FieldProperty extends GenericProperty {
    constructor(arg0: Field)
    // private field: Field;
    get(arg0: Object): Object;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotations(): Annotation[];
    set(arg0: Object, arg1: Object): void;
}