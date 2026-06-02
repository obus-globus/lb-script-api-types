import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
import type { ReceiverValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ReceiverValue.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface ReceiverParameterDescriptor extends Object, ParameterDescriptor{
    getValue(): ReceiverValue;
    substitute(arg0: TypeSubstitutor): ReceiverParameterDescriptor;
}