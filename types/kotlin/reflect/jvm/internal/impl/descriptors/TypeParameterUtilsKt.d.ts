import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { PossiblyInnerType } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PossiblyInnerType.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class TypeParameterUtilsKt extends Object {
    static buildPossiblyInnerType(paramarg0: KotlinType): PossiblyInnerType;
    static computeConstructorTypeParameters(paramarg0: ClassifierDescriptorWithTypeParameters): TypeParameterDescriptor[];
}