import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ClassDescriptorBase } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ClassDescriptorBase.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class MutableClassDescriptor extends ClassDescriptorBase {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: DeclarationDescriptor, arg1: ClassKind, arg2: boolean, arg3: boolean, arg4: Name, arg5: SourceElement, arg6: StorageManager)
    // private isInner: boolean;
    readonly kind: ClassKind;
    readonly modality: Modality;
    // private storageManager: StorageManager;
    // private supertypes: E[];
    readonly typeConstructor: TypeConstructor;
    // private typeParameters: TypeParameterDescriptor[];
    readonly visibility: DescriptorVisibility;
    createTypeConstructor(): void;
    getAnnotations(): AnnotationDescriptor[];
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): ClassConstructorDescriptor[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getKind(): ClassKind;
    getModality(): Modality;
    getStaticScope(): MemberScope;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): MemberScope;
    getUnsubstitutedPrimaryConstructor(): ClassConstructorDescriptor;
    getValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getVisibility(): DescriptorVisibility;
    isActual(): boolean;
    isCompanionObject(): boolean;
    isData(): boolean;
    isExpect(): boolean;
    isFun(): boolean;
    isInline(): boolean;
    isInner(): boolean;
    isValue(): boolean;
    setModality(arg0: Modality): void;
    setTypeParameterDescriptors(arg0: TypeParameterDescriptor[]): void;
    setVisibility(arg0: DescriptorVisibility): void;
    toString(): string;
}