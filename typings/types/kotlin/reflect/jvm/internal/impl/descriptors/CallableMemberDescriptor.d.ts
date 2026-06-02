import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { MemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/MemberDescriptor.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
export interface CallableMemberDescriptor extends Object, CallableDescriptor, MemberDescriptor{
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): CallableMemberDescriptor;
    getKind(): CallableMemberDescriptor$Kind;
    getOriginal(): CallableMemberDescriptor;
    getOverriddenDescriptors(): E[];
    setOverriddenDescriptors(arg0: E[]): void;
}