import type { ClassDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractTypeAliasDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeAliasDescriptor.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { VersionRequirementTable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { DeserializedMemberDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedMemberDescriptor.d.ts'
import type { StorageManager } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { SimpleType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeSubstitutor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitutor.d.ts'
export class DeserializedTypeAliasDescriptor extends AbstractTypeAliasDescriptor implements DeserializedMemberDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: StorageManager, arg1: DeclarationDescriptor, arg2: AnnotationDescriptor[], arg3: Name, arg4: DescriptorVisibility, arg5: ProtoBuf$TypeAlias, arg6: NameResolver, arg7: TypeTable, arg8: VersionRequirementTable, arg9: DeserializedContainerSource)
    readonly containerSource: DeserializedContainerSource;
    // private defaultTypeImpl: SimpleType;
    readonly expandedType: SimpleType;
    readonly nameResolver: NameResolver;
    readonly proto: ProtoBuf$TypeAlias;
    // private typeConstructorParameters: TypeParameterDescriptor[];
    readonly typeTable: TypeTable;
    readonly underlyingType: SimpleType;
    readonly versionRequirementTable: VersionRequirementTable;
    getClassDescriptor(): ClassDescriptor;
    getContainerSource(): DeserializedContainerSource;
    getDefaultType(): SimpleType;
    getExpandedType(): SimpleType;
    getNameResolver(): NameResolver;
    getProto(): ProtoBuf$TypeAlias;
    getTypeConstructorTypeParameters(): TypeParameterDescriptor[];
    getTypeTable(): TypeTable;
    getUnderlyingType(): SimpleType;
    getVersionRequirementTable(): VersionRequirementTable;
    initialize(arg0: TypeParameterDescriptor[], arg1: SimpleType, arg2: SimpleType): void;
    substitute(arg0: TypeSubstitutor): TypeAliasDescriptor;
}