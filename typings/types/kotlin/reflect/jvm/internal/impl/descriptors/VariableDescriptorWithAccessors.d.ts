import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface VariableDescriptorWithAccessors extends Object, VariableDescriptor{
    getContainingDeclaration(): DeclarationDescriptor;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getName(): Name;
    getOriginal(): CallableDescriptor;
    getOriginal(): DeclarationDescriptor;
    getReturnType(): KotlinType;
    getSource(): SourceElement;
    getType(): KotlinType;
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
    isConst(): boolean;
    isDelegated(): boolean;
    isLateInit(): boolean;
    isVar(): boolean;
    substitute(arg0: TypeSubstitutor): VariableDescriptor;
}