import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { CallableDescriptor$UserDataKey } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableDescriptor$UserDataKey.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { FunctionDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassConstructorDescriptorImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassConstructorDescriptorImpl.d.ts'
import type { JavaCallableMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaCallableMemberDescriptor.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class JavaClassConstructorDescriptor extends ClassConstructorDescriptorImpl implements JavaCallableMemberDescriptor {
    static create(paramarg0: ClassDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: SourceElement): ClassConstructorDescriptorImpl;
    static createJavaConstructor(paramarg0: ClassDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: SourceElement): JavaClassConstructorDescriptor;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: (Object | null)[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ClassDescriptor, arg1: JavaClassConstructorDescriptor, arg2: AnnotationDescriptor[], arg3: boolean, arg4: CallableMemberDescriptor$Kind, arg5: SourceElement)
    createDescriptor(arg0: ClassDescriptor, arg1: JavaClassConstructorDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: SourceElement, arg4: AnnotationDescriptor[]): JavaClassConstructorDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): JavaClassConstructorDescriptor;
    enhance(arg0: KotlinType, arg1: KotlinType[], arg2: KotlinType, arg3: Pair<CallableDescriptor$UserDataKey<Object>, Object>): JavaClassConstructorDescriptor;
    hasStableParameterNames(): boolean;
    hasSynthesizedParameterNames(): boolean;
    setHasStableParameterNames(arg0: boolean): void;
    setHasSynthesizedParameterNames(arg0: boolean): void;
}