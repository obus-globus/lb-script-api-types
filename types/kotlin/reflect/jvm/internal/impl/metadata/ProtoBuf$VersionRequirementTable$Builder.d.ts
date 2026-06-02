import type { ProtoBuf$VersionRequirementTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementTableOrBuilder.d.ts'
import type { ProtoBuf$VersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement.d.ts'
import type { ProtoBuf$VersionRequirementTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$VersionRequirementTable$Builder extends GeneratedMessageLite$Builder<ProtoBuf$VersionRequirementTable, ProtoBuf$VersionRequirementTable$Builder> implements ProtoBuf$VersionRequirementTableOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private requirement_: ProtoBuf$VersionRequirement[];
    build(): ProtoBuf$VersionRequirementTable;
    buildPartial(): ProtoBuf$VersionRequirementTable;
    clone(): ProtoBuf$VersionRequirementTable$Builder;
    // private ensureRequirementIsMutable(): void;
    getDefaultInstanceForType(): ProtoBuf$VersionRequirementTable;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$VersionRequirementTable): ProtoBuf$VersionRequirementTable$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$VersionRequirementTable$Builder;
}