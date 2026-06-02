import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export interface NewTypeVariableConstructor extends Object, TypeConstructor{
    getOriginalTypeParameter(): TypeParameterDescriptor;
}