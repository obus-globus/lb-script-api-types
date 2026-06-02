import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
export class TypeSubstitutionKt extends Object {
    static asSimpleType(paramarg0: KotlinType): SimpleType;
    static replace(paramarg0: KotlinType, paramarg1: (Object | null)[], paramarg2: AnnotationDescriptor[]): KotlinType;
    static replace(paramarg0: KotlinType, paramarg1: (Object | null)[], paramarg2: AnnotationDescriptor[], paramarg3: (Object | null)[]): KotlinType;
    static replace(paramarg0: SimpleType, paramarg1: (Object | null)[], paramarg2: TypeAttribute<Object>[]): SimpleType;
}