import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { VersionRequirementTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { MemberDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/MemberDeserializer.d.ts'
import type { TypeDeserializer } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/TypeDeserializer.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class DeserializationContext extends Object {
    constructor(arg0: DeserializationComponents, arg1: NameResolver, arg2: DeclarationDescriptor, arg3: TypeTable, arg4: VersionRequirementTable, arg5: BinaryVersion, arg6: DeserializedContainerSource, arg7: TypeDeserializer, arg8: ProtoBuf$TypeParameter[])
    readonly components: DeserializationComponents;
    readonly containerSource: DeserializedContainerSource;
    readonly containingDeclaration: DeclarationDescriptor;
    readonly memberDeserializer: MemberDeserializer;
    readonly metadataVersion: BinaryVersion;
    readonly nameResolver: NameResolver;
    readonly typeDeserializer: TypeDeserializer;
    readonly typeTable: TypeTable;
    readonly versionRequirementTable: VersionRequirementTable;
    childContext(arg0: DeclarationDescriptor, arg1: ProtoBuf$TypeParameter[], arg2: NameResolver, arg3: TypeTable, arg4: VersionRequirementTable, arg5: BinaryVersion): DeserializationContext;
    getComponents(): DeserializationComponents;
    getContainerSource(): DeserializedContainerSource;
    getContainingDeclaration(): DeclarationDescriptor;
    getMemberDeserializer(): MemberDeserializer;
    getMetadataVersion(): BinaryVersion;
    getNameResolver(): NameResolver;
    getStorageManager(): StorageManager;
    getTypeDeserializer(): TypeDeserializer;
    getTypeTable(): TypeTable;
    getVersionRequirementTable(): VersionRequirementTable;
}