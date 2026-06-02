import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConstructorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface ClassConstructorDescriptor extends Object, ConstructorDescriptor{
    getOriginal(): ClassConstructorDescriptor;
    substitute(arg0: TypeSubstitutor): ClassConstructorDescriptor;
}