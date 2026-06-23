import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { ModuleAwareClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeSubstitution } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitutor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class LazySubstitutingClassDescriptor extends ModuleAwareClassDescriptor {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: ModuleAwareClassDescriptor, arg1: TypeSubstitutor)
    readonly declaredTypeParameters: TypeParameterDescriptor[];
    // private newSubstitutor: TypeSubstitutor;
    readonly original: ModuleAwareClassDescriptor;
    // private originalSubstitutor: TypeSubstitutor;
    readonly typeConstructor: TypeConstructor;
    // private typeConstructorParameters: TypeParameterDescriptor[];
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getAnnotations(): AnnotationDescriptor[];
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): ClassConstructorDescriptor[];
    getContainingDeclaration(): DeclarationDescriptor;
    getContextReceivers(): ReceiverParameterDescriptor[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getDefaultType(): SimpleType;
    getKind(): ClassKind;
    getMemberScope(arg0: TypeSubstitution): MemberScope;
    getMemberScope(arg0: TypeSubstitution, arg1: KotlinTypeRefiner): MemberScope;
    getModality(): Modality;
    getName(): Name;
    getOriginal(): ClassDescriptor;
    getSource(): SourceElement;
    getStaticScope(): MemberScope;
    // private getSubstitutor(): TypeSubstitutor;
    getThisAsReceiverParameter(): ReceiverParameterDescriptor;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedInnerClassesScope(): MemberScope;
    getUnsubstitutedMemberScope(): MemberScope;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): MemberScope;
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
    substitute(arg0: TypeSubstitutor): ClassDescriptor;
    // private substituteSimpleType(arg0: SimpleType): SimpleType;
}