import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ParameterDescriptor.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { VariableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/VariableDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface ValueParameterDescriptor extends Object, ParameterDescriptor, VariableDescriptor{
    copy(arg0: CallableDescriptor, arg1: Name, arg2: number): ValueParameterDescriptor;
    declaresDefaultValue(): boolean;
    getContainingDeclaration(): CallableDescriptor;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getIndex(): number;
    getName(): Name;
    getOriginal(): ValueParameterDescriptor;
    getOverriddenDescriptors(): ValueParameterDescriptor[];
    getReturnType(): KotlinType;
    getSource(): SourceElement;
    getType(): KotlinType;
    getVarargElementType(): KotlinType;
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
    isConst(): boolean;
    isCrossinline(): boolean;
    isLateInit(): boolean;
    isNoinline(): boolean;
    isVar(): boolean;
    substitute(arg0: TypeSubstitutor): VariableDescriptor;
}