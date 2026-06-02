import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ErasureTypeAttributes } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ErasureTypeAttributes.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeParameterUpperBoundEraser } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeParameterUpperBoundEraser.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class ErasureProjectionComputer extends Object {
    constructor()
    computeProjection(arg0: TypeParameterDescriptor, arg1: ErasureTypeAttributes, arg2: TypeParameterUpperBoundEraser, arg3: KotlinType): TypeProjection;
}