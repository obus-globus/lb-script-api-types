import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class TypeParameterUpperBoundEraser$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    replaceArgumentsOfUpperBound(arg0: KotlinType, arg1: TypeSubstitutor, arg2: TypeParameterDescriptor[], arg3: boolean): KotlinType;
}