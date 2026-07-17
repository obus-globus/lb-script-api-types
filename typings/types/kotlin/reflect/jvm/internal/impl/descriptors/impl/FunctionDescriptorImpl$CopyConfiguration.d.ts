import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export class FunctionDescriptorImpl$CopyConfiguration extends Object implements FunctionDescriptor$CopyBuilder<FunctionDescriptor> {
    constructor(null_: FunctionDescriptorImpl, arg1: TypeSubstitution, arg2: DeclarationDescriptor, arg3: Modality, arg4: DescriptorVisibility, arg5: CallableMemberDescriptor$Kind, arg6: ValueParameterDescriptor[], arg7: ReceiverParameterDescriptor[], arg8: ReceiverParameterDescriptor, arg9: KotlinType, arg10: Name)
    // private additionalAnnotations: AnnotationDescriptor[];
    // private copyOverrides: boolean;
    // private dispatchReceiverParameter: ReceiverParameterDescriptor;
    // private dropOriginalInContainingParts: boolean;
    // private isHiddenForResolutionEverywhereBesideSupercalls: boolean;
    // private isHiddenToOvercomeSignatureClash: boolean;
    // private justForTypeSubstitution: boolean;
    // private kind: CallableMemberDescriptor$Kind;
    // private name: Name;
    // private newContextReceiverParameters: ReceiverParameterDescriptor[];
    // private newExtensionReceiverParameter: ReceiverParameterDescriptor;
    // private newHasSynthesizedParameterNames: boolean;
    // private newModality: Modality;
    // private newOwner: DeclarationDescriptor;
    // private newReturnType: KotlinType;
    // private newTypeParameters: TypeParameterDescriptor[];
    // private newValueParameterDescriptors: ValueParameterDescriptor[];
    // private newVisibility: DescriptorVisibility;
    // private original: FunctionDescriptor;
    // private preserveSourceElement: boolean;
    // private signatureChange: boolean;
    // private substitution: TypeSubstitution;
    // private userDataMap: JavaMap<CallableDescriptor$UserDataKey<Object>, Object>;
    build(): FunctionDescriptor;
    putUserData<V extends unknown>(arg0: CallableDescriptor$UserDataKey<V>, arg1: V): FunctionDescriptor$CopyBuilder<FunctionDescriptor>;
    setAdditionalAnnotations(arg0: AnnotationDescriptor[]): FunctionDescriptorImpl$CopyConfiguration;
    setCopyOverrides(arg0: boolean): FunctionDescriptorImpl$CopyConfiguration;
    setDispatchReceiverParameter(arg0: ReceiverParameterDescriptor): FunctionDescriptorImpl$CopyConfiguration;
    setDropOriginalInContainingParts(): FunctionDescriptorImpl$CopyConfiguration;
    setExtensionReceiverParameter(arg0: ReceiverParameterDescriptor): FunctionDescriptorImpl$CopyConfiguration;
    setHasSynthesizedParameterNames(arg0: boolean): FunctionDescriptorImpl$CopyConfiguration;
    setHiddenForResolutionEverywhereBesideSupercalls(): FunctionDescriptorImpl$CopyConfiguration;
    setHiddenToOvercomeSignatureClash(): FunctionDescriptorImpl$CopyConfiguration;
    setJustForTypeSubstitution(arg0: boolean): FunctionDescriptorImpl$CopyConfiguration;
    setKind(arg0: CallableMemberDescriptor$Kind): FunctionDescriptorImpl$CopyConfiguration;
    setModality(arg0: Modality): FunctionDescriptorImpl$CopyConfiguration;
    setName(arg0: Name): FunctionDescriptorImpl$CopyConfiguration;
    setOriginal(arg0: CallableMemberDescriptor): FunctionDescriptorImpl$CopyConfiguration;
    setOwner(arg0: DeclarationDescriptor): FunctionDescriptorImpl$CopyConfiguration;
    setPreserveSourceElement(): FunctionDescriptorImpl$CopyConfiguration;
    setReturnType(arg0: KotlinType): FunctionDescriptorImpl$CopyConfiguration;
    setSignatureChange(): FunctionDescriptorImpl$CopyConfiguration;
    setSubstitution(arg0: TypeSubstitution): FunctionDescriptorImpl$CopyConfiguration;
    setTypeParameters(arg0: TypeParameterDescriptor[]): FunctionDescriptorImpl$CopyConfiguration;
    setValueParameters(arg0: ValueParameterDescriptor[]): FunctionDescriptorImpl$CopyConfiguration;
    setVisibility(arg0: DescriptorVisibility): FunctionDescriptorImpl$CopyConfiguration;
}