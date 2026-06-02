import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassConstructorDescriptorImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassConstructorDescriptorImpl.d.ts'
import type { TypeSubstitutor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class DescriptorFactory$DefaultClassConstructorDescriptor extends ClassConstructorDescriptorImpl {
    static create(paramarg0: ClassDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: SourceElement): ClassConstructorDescriptorImpl;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: (Object | null)[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ClassDescriptor, arg1: SourceElement, arg2: boolean)
}