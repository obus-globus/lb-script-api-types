import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class TypeArgument extends Object {
    constructor(arg0: TypeParameterDescriptor, arg1: KotlinType, arg2: KotlinType)
    readonly inProjection: KotlinType;
    readonly outProjection: KotlinType;
    readonly typeParameter: TypeParameterDescriptor;
    getInProjection(): KotlinType;
    getOutProjection(): KotlinType;
    getTypeParameter(): TypeParameterDescriptor;
    isConsistent(): boolean;
}