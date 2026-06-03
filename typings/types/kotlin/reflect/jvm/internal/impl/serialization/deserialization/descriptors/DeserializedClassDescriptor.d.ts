import type { ClassConstructorDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ClassKind } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassKind.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { DeserializedDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeserializedDescriptor.d.ts'
import type { Modality } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { ReceiverParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ReceiverParameterDescriptor.d.ts'
import type { ScopesHolderForClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ScopesHolderForClass.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueClassRepresentation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueClassRepresentation.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractClassDescriptor.d.ts'
import type { ModuleAwareClassDescriptor$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleAwareClassDescriptor$Companion.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { BinaryVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { MemberScopeImpl } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
import type { DeserializationContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationContext.d.ts'
import type { ProtoContainer$Class } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoContainer$Class.d.ts'
import type { DeserializedClassDescriptor$DeserializedClassMemberScope } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedClassDescriptor$DeserializedClassMemberScope.d.ts'
import type { DeserializedClassDescriptor$DeserializedClassTypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedClassDescriptor$DeserializedClassTypeConstructor.d.ts'
import type { DeserializedClassDescriptor$EnumEntryClassDescriptors } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedClassDescriptor$EnumEntryClassDescriptors.d.ts'
import type { NotNullLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { NullableLazyValue } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NullableLazyValue.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeSubstitution } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class DeserializedClassDescriptor extends AbstractClassDescriptor implements DeserializedDescriptor {
    static Companion: ModuleAwareClassDescriptor$Companion;
    constructor(arg0: DeserializationContext, arg1: ProtoBuf$Class, arg2: NameResolver, arg3: BinaryVersion, arg4: SourceElement)
    readonly annotations: AnnotationDescriptor[];
    readonly c: DeserializationContext;
    // private classId: ClassId;
    readonly classProto: ProtoBuf$Class;
    readonly companionObjectDescriptor: NullableLazyValue<ClassDescriptor>;
    readonly constructors: NotNullLazyValue<E[]>;
    readonly containingDeclaration: DeclarationDescriptor;
    // private enumEntries: DeserializedClassDescriptor$EnumEntryClassDescriptors;
    // private hasEnumEntriesMetadataFlag: boolean;
    readonly kind: ClassKind;
    // private memberScopeHolder: ScopesHolderForClass<DeserializedClassDescriptor$DeserializedClassMemberScope>;
    readonly metadataVersion: BinaryVersion;
    readonly modality: Modality;
    // private primaryConstructor: NullableLazyValue<ClassConstructorDescriptor>;
    // private sealedSubclasses: NotNullLazyValue<E[]>;
    // private sourceElement: SourceElement;
    readonly staticScope: MemberScopeImpl;
    // private thisAsProtoContainer: ProtoContainer$Class;
    readonly typeConstructor: DeserializedClassDescriptor$DeserializedClassTypeConstructor;
    readonly valueClassRepresentation: NullableLazyValue<ValueClassRepresentation<SimpleType>>;
    readonly visibility: DescriptorVisibility;
    // private computeCompanionObjectDescriptor(): ClassDescriptor;
    // private computeConstructors(): E[];
    // private computePrimaryConstructor(): ClassConstructorDescriptor;
    // private computeSecondaryConstructors(): ClassConstructorDescriptor[];
    // private computeSubclassesForSealedClass(): E[];
    // private computeValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getAnnotations(): AnnotationDescriptor[];
    getC(): DeserializationContext;
    getClassProto(): ProtoBuf$Class;
    getCompanionObjectDescriptor(): ClassDescriptor;
    getConstructors(): E[];
    getContainingDeclaration(): DeclarationDescriptor;
    getContextReceivers(): ReceiverParameterDescriptor[];
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getKind(): ClassKind;
    // private getMemberScope(): DeserializedClassDescriptor$DeserializedClassMemberScope;
    getMemberScope(arg0: TypeSubstitution): MemberScope;
    getMemberScope(arg0: TypeSubstitution, arg1: KotlinTypeRefiner): MemberScope;
    getMetadataVersion(): BinaryVersion;
    getModality(): Modality;
    getSource(): SourceElement;
    getStaticScope(): MemberScopeImpl;
    getThisAsProtoContainer$deserialization(): ProtoContainer$Class;
    getTypeConstructor(): TypeConstructor;
    getUnsubstitutedMemberScope(): MemberScope;
    getUnsubstitutedMemberScope(arg0: KotlinTypeRefiner): MemberScope;
    getUnsubstitutedPrimaryConstructor(): ClassConstructorDescriptor;
    // private getValueClassPropertyType(arg0: Name): SimpleType;
    getValueClassRepresentation(): ValueClassRepresentation<SimpleType>;
    getVisibility(): DescriptorVisibility;
    hasNestedClass$deserialization(arg0: Name): boolean;
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