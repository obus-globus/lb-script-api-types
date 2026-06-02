import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export class TypeAttributesKt extends Object {
    static replaceAnnotations(paramarg0: TypeAttribute<Object>[], paramarg1: AnnotationDescriptor[]): TypeAttribute<Object>[];
    static toDefaultAttributes(paramarg0: AnnotationDescriptor[]): TypeAttribute<Object>[];
}