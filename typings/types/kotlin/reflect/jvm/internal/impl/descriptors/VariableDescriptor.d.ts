import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export interface VariableDescriptor extends Object, ValueDescriptor{
    getCompileTimeInitializer(): ConstantValue<Object>;
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
    isLateInit(): boolean;
    isVar(): boolean;
    substitute(arg0: TypeSubstitutor): VariableDescriptor;
}