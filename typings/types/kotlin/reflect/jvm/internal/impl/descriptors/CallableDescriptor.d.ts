import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorNonRoot } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorNonRoot.d.ts'
import type { DeclarationDescriptorWithVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithVisibility.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { Substitutable } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Substitutable.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface CallableDescriptor extends Object, DeclarationDescriptorNonRoot, DeclarationDescriptorWithVisibility, Substitutable<CallableDescriptor>{
    getContainingDeclaration(): DeclarationDescriptor;
    getContextReceiverParameters(): ReceiverParameterDescriptor[];
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getName(): Name;
    getOriginal(): CallableDescriptor;
    getOverriddenDescriptors(): CallableDescriptor[];
    getReturnType(): KotlinType;
    getSource(): SourceElement;
    getTypeParameters(): TypeParameterDescriptor[];
    getUserData<V extends unknown>(arg0: CallableDescriptor$UserDataKey<V>): V;
    getValueParameters(): ValueParameterDescriptor[];
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
}