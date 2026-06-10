import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { DeclarationDescriptorNonRoot } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorNonRoot.d.ts'
import type { DeclarationDescriptorWithVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorWithVisibility.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { Substitutable } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Substitutable.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface CallableDescriptor extends Object, DeclarationDescriptorNonRoot, DeclarationDescriptorWithVisibility, Substitutable<CallableDescriptor>{
    getContextReceiverParameters(): ReceiverParameterDescriptor[];
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getOriginal(): CallableDescriptor;
    getOverriddenDescriptors(): CallableDescriptor[];
    getReturnType(): KotlinType;
    getTypeParameters(): TypeParameterDescriptor[];
    getUserData<V extends Object | number | string | boolean>(arg0: CallableDescriptor$UserDataKey<V>): V;
    getValueParameters(): ValueParameterDescriptor[];
    hasSynthesizedParameterNames(): boolean;
}