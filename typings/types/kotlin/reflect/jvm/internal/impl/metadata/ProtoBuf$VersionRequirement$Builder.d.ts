import type { ProtoBuf$VersionRequirementOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementOrBuilder.d.ts'
import type { ProtoBuf$VersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement.d.ts'
import type { ProtoBuf$VersionRequirement$Level } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement$Level.d.ts'
import type { ProtoBuf$VersionRequirement$VersionKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement$VersionKind.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$VersionRequirement$Builder extends GeneratedMessageLite$Builder<ProtoBuf$VersionRequirement, ProtoBuf$VersionRequirement$Builder> implements ProtoBuf$VersionRequirementOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private errorCode_: number;
    // private level_: ProtoBuf$VersionRequirement$Level;
    // private message_: number;
    // private versionFull_: number;
    // private versionKind_: ProtoBuf$VersionRequirement$VersionKind;
    // private version_: number;
    build(): ProtoBuf$VersionRequirement;
    buildPartial(): ProtoBuf$VersionRequirement;
    clone(): ProtoBuf$VersionRequirement$Builder;
    getDefaultInstanceForType(): ProtoBuf$VersionRequirement;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$VersionRequirement): ProtoBuf$VersionRequirement$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$VersionRequirement$Builder;
    setErrorCode(arg0: number): ProtoBuf$VersionRequirement$Builder;
    setLevel(arg0: ProtoBuf$VersionRequirement$Level): ProtoBuf$VersionRequirement$Builder;
    setMessage(arg0: number): ProtoBuf$VersionRequirement$Builder;
    setVersion(arg0: number): ProtoBuf$VersionRequirement$Builder;
    setVersionFull(arg0: number): ProtoBuf$VersionRequirement$Builder;
    setVersionKind(arg0: ProtoBuf$VersionRequirement$VersionKind): ProtoBuf$VersionRequirement$Builder;
}