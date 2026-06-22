import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { CallableDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export interface JavaCallableMemberDescriptor extends Object, CallableMemberDescriptor{
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): CallableMemberDescriptor;
    enhance(arg0: KotlinType, arg1: KotlinType[], arg2: KotlinType, arg3: Pair<CallableDescriptor$UserDataKey<Object>, Object>): JavaCallableMemberDescriptor;
    getContainingDeclaration(): DeclarationDescriptor;
    getDispatchReceiverParameter(): ReceiverParameterDescriptor;
    getExtensionReceiverParameter(): ReceiverParameterDescriptor;
    getKind(): CallableMemberDescriptor$Kind;
    getModality(): Modality;
    getName(): Name;
    getOriginal(): CallableDescriptor;
    getOriginal(): CallableMemberDescriptor;
    getOriginal(): DeclarationDescriptor;
    getReturnType(): KotlinType;
    getSource(): SourceElement;
    getVisibility(): DescriptorVisibility;
    hasSynthesizedParameterNames(): boolean;
    isActual(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
}