import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FieldDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FieldDescriptor.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { PropertyAccessorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyAccessorDescriptor.d.ts'
import type { PropertyGetterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
import type { PropertySetterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { VariableDescriptorWithAccessors } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptorWithAccessors.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface PropertyDescriptor extends Object, CallableMemberDescriptor, VariableDescriptorWithAccessors{
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): CallableMemberDescriptor;
    getAccessors(): PropertyAccessorDescriptor[];
    getBackingField(): FieldDescriptor;
    getContainingDeclaration(): DeclarationDescriptor;
    getDelegateField(): FieldDescriptor;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getGetter(): PropertyGetterDescriptor;
    getKind(): CallableMemberDescriptor$Kind;
    getModality(): Modality;
    getName(): Name;
    getOriginal(): PropertyDescriptor;
    getOverriddenDescriptors(): PropertyDescriptor[];
    getReturnType(): KotlinType;
    getSetter(): PropertySetterDescriptor;
    getSource(): SourceElement;
    getType(): KotlinType;
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
    isActual(): boolean;
    isConst(): boolean;
    isDelegated(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isLateInit(): boolean;
    isVar(): boolean;
    substitute(arg0: TypeSubstitutor): PropertyDescriptor;
}