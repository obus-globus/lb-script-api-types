import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
export interface VariableDescriptorWithAccessors extends Object, VariableDescriptor{
    isDelegated(): boolean;
}