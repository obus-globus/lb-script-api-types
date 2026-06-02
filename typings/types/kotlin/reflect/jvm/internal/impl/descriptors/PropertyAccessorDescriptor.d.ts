import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PropertyDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { VariableAccessorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableAccessorDescriptor.d.ts'
export interface PropertyAccessorDescriptor extends Object, VariableAccessorDescriptor{
    getCorrespondingProperty(): PropertyDescriptor;
    isDefault(): boolean;
}