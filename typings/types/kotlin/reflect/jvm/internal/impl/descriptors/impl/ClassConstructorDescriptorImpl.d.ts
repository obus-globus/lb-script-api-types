import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CallableMemberDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ConstructorDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class ClassConstructorDescriptorImpl extends FunctionDescriptorImpl implements ClassConstructorDescriptor {
    static create(paramarg0: ClassDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: SourceElement): ClassConstructorDescriptorImpl;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: boolean[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: ClassDescriptor, arg1: ConstructorDescriptor, arg2: AnnotationDescriptor[], arg3: boolean, arg4: CallableMemberDescriptor$Kind, arg5: SourceElement)
    // private isPrimary: boolean;
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    // private calculateContextReceiverParameters(): ReceiverParameterDescriptor[];
    calculateDispatchReceiverParameter(): ReceiverParameterDescriptor;
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): ClassConstructorDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): ClassConstructorDescriptorImpl;
    getConstructedClass(): ClassDescriptor;
    getContainingDeclaration(): ClassDescriptor;
    getOriginal(): ClassConstructorDescriptor;
    getOverriddenDescriptors(): FunctionDescriptor[];
    initialize(arg0: ValueParameterDescriptor[], arg1: DescriptorVisibility): ClassConstructorDescriptorImpl;
    initialize(arg0: ValueParameterDescriptor[], arg1: DescriptorVisibility, arg2: TypeParameterDescriptor[]): ClassConstructorDescriptorImpl;
    initialize(arg0: ReceiverParameterDescriptor, arg1: ReceiverParameterDescriptor, arg2: ReceiverParameterDescriptor[], arg3: TypeParameterDescriptor[], arg4: ValueParameterDescriptor[], arg5: KotlinType, arg6: Modality, arg7: DescriptorVisibility): FunctionDescriptorImpl;
    isPrimary(): boolean;
    setOverriddenDescriptors(arg0: CallableMemberDescriptor[]): void;
    substitute(arg0: TypeSubstitutor): ClassConstructorDescriptor;
}