import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export interface FunctionDescriptor$CopyBuilder<D extends FunctionDescriptor> extends Object{
    build(): D;
    putUserData<V extends Object | number | string | boolean>(arg0: CallableDescriptor$UserDataKey<V>, arg1: V): FunctionDescriptor$CopyBuilder<D>;
    setAdditionalAnnotations(arg0: AnnotationDescriptor[]): FunctionDescriptor$CopyBuilder<D>;
    setCopyOverrides(arg0: boolean): FunctionDescriptor$CopyBuilder<D>;
    setDispatchReceiverParameter(arg0: ReceiverParameterDescriptor): FunctionDescriptor$CopyBuilder<D>;
    setDropOriginalInContainingParts(): FunctionDescriptor$CopyBuilder<D>;
    setExtensionReceiverParameter(arg0: ReceiverParameterDescriptor): FunctionDescriptor$CopyBuilder<D>;
    setHiddenForResolutionEverywhereBesideSupercalls(): FunctionDescriptor$CopyBuilder<D>;
    setHiddenToOvercomeSignatureClash(): FunctionDescriptor$CopyBuilder<D>;
    setKind(arg0: CallableMemberDescriptor$Kind): FunctionDescriptor$CopyBuilder<D>;
    setModality(arg0: Modality): FunctionDescriptor$CopyBuilder<D>;
    setName(arg0: Name): FunctionDescriptor$CopyBuilder<D>;
    setOriginal(arg0: CallableMemberDescriptor): FunctionDescriptor$CopyBuilder<D>;
    setOwner(arg0: DeclarationDescriptor): FunctionDescriptor$CopyBuilder<D>;
    setPreserveSourceElement(): FunctionDescriptor$CopyBuilder<D>;
    setReturnType(arg0: KotlinType): FunctionDescriptor$CopyBuilder<D>;
    setSignatureChange(): FunctionDescriptor$CopyBuilder<D>;
    setSubstitution(arg0: TypeSubstitution): FunctionDescriptor$CopyBuilder<D>;
    setTypeParameters(arg0: TypeParameterDescriptor[]): FunctionDescriptor$CopyBuilder<D>;
    setValueParameters(arg0: ValueParameterDescriptor[]): FunctionDescriptor$CopyBuilder<D>;
    setVisibility(arg0: DescriptorVisibility): FunctionDescriptor$CopyBuilder<D>;
}