import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { ClassOrPackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassOrPackageFragmentDescriptor.d.ts'
import type { ClassifierDescriptorWithTypeParameters } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptorWithTypeParameters.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
export interface ClassDescriptor extends Object, ClassOrPackageFragmentDescriptor, ClassifierDescriptorWithTypeParameters{
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): ClassConstructorDescriptor[];
    getContainingDeclaration(): DeclarationDescriptor;
    getContextReceivers(): ReceiverParameterDescriptor[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getDefaultType(): SimpleType;
    getKind(): ClassKind;
    getMemberScope(arg0: TypeSubstitution): MemberScope;
    getModality(): Modality;
    getName(): Name;
    getOriginal(): ClassDescriptor;
    getSource(): SourceElement;
    getStaticScope(): MemberScope;
    getThisAsReceiverParameter(): ReceiverParameterDescriptor;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedInnerClassesScope(): MemberScope;
    getUnsubstitutedMemberScope(): MemberScope;
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
}