import type { ClassConstructorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassDescriptorBase } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassDescriptorBase.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope$Empty } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Empty.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { ClassTypeConstructorImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ClassTypeConstructorImpl.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class NotFoundClasses$MockClassDescriptor extends ClassDescriptorBase {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: StorageManager, arg1: DeclarationDescriptor, arg2: Name, arg3: boolean, arg4: number)
    readonly declaredTypeParameters: TypeParameterDescriptor[];
    // private isInner: boolean;
    readonly typeConstructor: ClassTypeConstructorImpl;
    getAnnotations(): AnnotationDescriptor[];
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): E[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getKind(): ClassKind;
    getModality(): Modality;
    getStaticScope(): MemberScope$Empty;
    getTypeConstructor(): ClassTypeConstructorImpl;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): MemberScope$Empty;
    getUnsubstitutedPrimaryConstructor(): ClassConstructorDescriptor;
    getValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isCompanionObject(): boolean;
    isData(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isFun(): boolean;
    isInline(): boolean;
    isInner(): boolean;
    isValue(): boolean;
    toString(): string;
}