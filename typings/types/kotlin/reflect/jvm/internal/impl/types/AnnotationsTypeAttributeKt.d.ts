import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AnnotationsTypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AnnotationsTypeAttribute.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export class AnnotationsTypeAttributeKt extends Object {
    static getAnnotations(paramarg0: TypeAttribute<Object>[]): AnnotationDescriptor[];
    static getAnnotationsAttribute(paramarg0: TypeAttribute<Object>[]): AnnotationsTypeAttribute;
}