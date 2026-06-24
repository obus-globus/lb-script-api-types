import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { CallableMemberDescriptor$Kind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/CallableMemberDescriptor$Kind.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { FunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FunctionDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl.d.ts'
import type { TypeAliasConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/TypeAliasConstructorDescriptor.d.ts'
import type { TypeAliasConstructorDescriptorImpl$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/TypeAliasConstructorDescriptorImpl$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { NullableLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class TypeAliasConstructorDescriptorImpl extends FunctionDescriptorImpl implements TypeAliasConstructorDescriptor {
    static Companion: TypeAliasConstructorDescriptorImpl$Companion;
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor): ValueParameterDescriptor[];
    static getSubstitutedValueParameters(paramarg0: FunctionDescriptor, paramarg1: ValueParameterDescriptor[], paramarg2: TypeSubstitutor, paramarg3: boolean, paramarg4: boolean, paramarg5: (Object | null)[]): ValueParameterDescriptor[];
    static toString(paramarg0: DeclarationDescriptor): string;
    private constructor(arg0: StorageManager, arg1: TypeAliasDescriptor, arg2: ClassConstructorDescriptor, arg3: TypeAliasConstructorDescriptor, arg4: AnnotationDescriptor[], arg5: CallableMemberDescriptor$Kind, arg6: SourceElement)
    constructor(arg0: StorageManager, arg1: TypeAliasDescriptor, arg2: ClassConstructorDescriptor, arg3: TypeAliasConstructorDescriptor, arg4: AnnotationDescriptor[], arg5: CallableMemberDescriptor$Kind, arg6: SourceElement, arg7: DefaultConstructorMarker)
    // private storageManager: StorageManager;
    readonly typeAliasDescriptor: TypeAliasDescriptor;
    readonly underlyingConstructorDescriptor: ClassConstructorDescriptor;
    // private withDispatchReceiver$delegate: NullableLazyValue<Object>;
    copy(arg0: DeclarationDescriptor, arg1: Modality, arg2: DescriptorVisibility, arg3: CallableMemberDescriptor$Kind, arg4: boolean): TypeAliasConstructorDescriptor;
    createSubstitutedCopy(arg0: DeclarationDescriptor, arg1: FunctionDescriptor, arg2: CallableMemberDescriptor$Kind, arg3: Name, arg4: AnnotationDescriptor[], arg5: SourceElement): TypeAliasConstructorDescriptorImpl;
    getConstructedClass(): ClassDescriptor;
    getContainingDeclaration(): TypeAliasDescriptor;
    getOriginal(): TypeAliasConstructorDescriptor;
    getReturnType(): KotlinType;
    getTypeAliasDescriptor(): TypeAliasDescriptor;
    getUnderlyingConstructorDescriptor(): ClassConstructorDescriptor;
    isPrimary(): boolean;
    substitute(arg0: TypeSubstitutor): TypeAliasConstructorDescriptor;
}