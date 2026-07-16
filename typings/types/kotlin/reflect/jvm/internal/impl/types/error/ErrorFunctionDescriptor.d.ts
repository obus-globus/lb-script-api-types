import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { FunctionDescriptor$CopyBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor$CopyBuilder.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl.d.ts'
import type { FunctionDescriptorImpl$CopyConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl$CopyConfiguration.d.ts'
import type { SimpleFunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/SimpleFunctionDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class ErrorFunctionDescriptor extends SimpleFunctionDescriptorImpl {
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Name, paramarg3: CallableMemberDescriptor$Kind, paramarg4: SourceElement): SimpleFunctionDescriptorImpl;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ClassDescriptor)
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): SimpleFunctionDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): FunctionDescriptorImpl;
    getUserData<V extends unknown>(arg0: CallableDescriptor$UserDataKey<V>): V;
    isSuspend(): boolean;
    newCopyBuilder(): FunctionDescriptor$CopyBuilder<SimpleFunctionDescriptor>;
    newCopyBuilder(arg0: TypeSubstitutor): FunctionDescriptorImpl$CopyConfiguration;
    setOverriddenDescriptors(arg0: CallableMemberDescriptor[]): void;
}