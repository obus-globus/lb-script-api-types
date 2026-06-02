import type { ProtoBuf$TypeAliasOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAliasOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$TypeAlias$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$TypeAlias, ProtoBuf$TypeAlias$Builder> implements ProtoBuf$TypeAliasOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private expandedTypeId_: number;
    // private expandedType_: ProtoBuf$Type;
    // private flags_: number;
    // private name_: number;
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private underlyingTypeId_: number;
    // private underlyingType_: ProtoBuf$Type;
    // private versionRequirement_: number[];
    build(): ProtoBuf$TypeAlias;
    buildPartial(): ProtoBuf$TypeAlias;
    clone(): ProtoBuf$TypeAlias$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureCompilerPluginDataIsMutable(): void;
    // private ensureTypeParameterIsMutable(): void;
    // private ensureVersionRequirementIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getDefaultInstanceForType(): ProtoBuf$TypeAlias;
    getExpandedType(): ProtoBuf$Type;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getUnderlyingType(): ProtoBuf$Type;
    hasExpandedType(): boolean;
    hasName(): boolean;
    hasUnderlyingType(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeExpandedType(arg0: ProtoBuf$Type): ProtoBuf$TypeAlias$Builder;
    mergeFrom(arg0: ProtoBuf$TypeAlias): ProtoBuf$TypeAlias$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$TypeAlias$Builder;
    mergeUnderlyingType(arg0: ProtoBuf$Type): ProtoBuf$TypeAlias$Builder;
    setExpandedTypeId(arg0: number): ProtoBuf$TypeAlias$Builder;
    setFlags(arg0: number): ProtoBuf$TypeAlias$Builder;
    setName(arg0: number): ProtoBuf$TypeAlias$Builder;
    setUnderlyingTypeId(arg0: number): ProtoBuf$TypeAlias$Builder;
}