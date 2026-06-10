import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { FieldDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FieldDescriptor.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyGetterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
import type { PropertySetterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { VariableDescriptorWithAccessors } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptorWithAccessors.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface PropertyDescriptor extends Object, CallableMemberDescriptor, VariableDescriptorWithAccessors{
    getAccessors(): PropertyAccessorDescriptor[];
    getBackingField(): FieldDescriptor;
    getDelegateField(): FieldDescriptor;
    getGetter(): PropertyGetterDescriptor;
    getOriginal(): PropertyDescriptor;
    getOverriddenDescriptors(): PropertyDescriptor[];
    getSetter(): PropertySetterDescriptor;
    substitute(arg0: TypeSubstitutor): PropertyDescriptor;
}