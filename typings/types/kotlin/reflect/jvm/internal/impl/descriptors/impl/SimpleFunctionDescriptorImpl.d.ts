import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class SimpleFunctionDescriptorImpl extends FunctionDescriptorImpl implements SimpleFunctionDescriptor {
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Name, paramarg3: CallableMemberDescriptor$Kind, paramarg4: SourceElement): SimpleFunctionDescriptorImpl;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: (Object | null)[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: DeclarationDescriptor, arg1: SimpleFunctionDescriptor, arg2: AnnotationDescriptor[], arg3: Name, arg4: CallableMemberDescriptor$Kind, arg5: SourceElement)
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): SimpleFunctionDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): FunctionDescriptorImpl;
    getOriginal(): SimpleFunctionDescriptor;
    initialize(arg0: ReceiverParameterDescriptor, arg1: ReceiverParameterDescriptor, arg2: ReceiverParameterDescriptor[], arg3: TypeParameterDescriptor[], arg4: ValueParameterDescriptor[], arg5: KotlinType, arg6: Modality, arg7: DescriptorVisibility): SimpleFunctionDescriptorImpl;
    initialize(arg0: ReceiverParameterDescriptor, arg1: ReceiverParameterDescriptor, arg2: ReceiverParameterDescriptor[], arg3: TypeParameterDescriptor[], arg4: ValueParameterDescriptor[], arg5: KotlinType, arg6: Modality, arg7: DescriptorVisibility, arg8: Map<CallableDescriptor$UserDataKey<Object>, Object | null>): SimpleFunctionDescriptorImpl;
    newCopyBuilder(): FunctionDescriptor$CopyBuilder<SimpleFunctionDescriptor>;
}