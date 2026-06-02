import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../kotlin/reflect/KClass.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export class AnnotationsTypeAttribute extends TypeAttribute<AnnotationsTypeAttribute> {
    constructor(arg0: AnnotationDescriptor[])
    readonly annotations: AnnotationDescriptor[];
    add(arg0: AnnotationsTypeAttribute): AnnotationsTypeAttribute;
    equals(arg0: Object | null): boolean;
    getAnnotations(): AnnotationDescriptor[];
    getKey(): KClass<AnnotationsTypeAttribute>;
    hashCode(): number;
    intersect(arg0: AnnotationsTypeAttribute): AnnotationsTypeAttribute;
}