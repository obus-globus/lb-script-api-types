import type { GenericProperty } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/GenericProperty.d.ts'
import type { PropertyDescriptor } from '../../../../../../java/beans/PropertyDescriptor.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MethodProperty extends GenericProperty {
    constructor(arg0: PropertyDescriptor)
    // private property: PropertyDescriptor;
    readonly readable: boolean;
    readonly writable: boolean;
    get(arg0: Object): Object;
    getAnnotation<A extends Annotation>(arg0: Class<A>): A;
    getAnnotations(): Annotation[];
    isReadable(): boolean;
    isWritable(): boolean;
    set(arg0: Object, arg1: Object): void;
}