import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { FunctionInvokeDescriptor$Factory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionInvokeDescriptor$Factory.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl.d.ts'
import type { FunctionDescriptorImpl$CopyConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl$CopyConfiguration.d.ts'
import type { SimpleFunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/SimpleFunctionDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class FunctionInvokeDescriptor extends SimpleFunctionDescriptorImpl {
    static Factory: FunctionInvokeDescriptor$Factory;
    static create(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: Name, paramarg3: CallableMemberDescriptor$Kind, paramarg4: SourceElement): SimpleFunctionDescriptorImpl;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: (Object | null)[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    private constructor(arg0: DeclarationDescriptor, arg1: FunctionInvokeDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: boolean)
    constructor(arg0: DeclarationDescriptor, arg1: FunctionInvokeDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: boolean, arg4: DefaultConstructorMarker)
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): FunctionDescriptorImpl;
    doSubstitute(arg0: FunctionDescriptorImpl$CopyConfiguration): FunctionDescriptor;
    isExternal(): boolean;
    isInline(): boolean;
    isTailrec(): boolean;
    // private replaceParameterNames(arg0: Name[]): FunctionDescriptor;
}