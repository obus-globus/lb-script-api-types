import type { ProtoBuf$CompilerPluginDataOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginDataOrBuilder.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$CompilerPluginData$Builder extends GeneratedMessageLite$Builder<ProtoBuf$CompilerPluginData, ProtoBuf$CompilerPluginData$Builder> implements ProtoBuf$CompilerPluginDataOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private data_: number[];
    // private pluginId_: number;
    build(): ProtoBuf$CompilerPluginData;
    buildPartial(): ProtoBuf$CompilerPluginData;
    clone(): ProtoBuf$CompilerPluginData$Builder;
    getDefaultInstanceForType(): ProtoBuf$CompilerPluginData;
    hasData(): boolean;
    hasPluginId(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$CompilerPluginData): ProtoBuf$CompilerPluginData$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$CompilerPluginData$Builder;
    setData(arg0: number[]): ProtoBuf$CompilerPluginData$Builder;
    setPluginId(arg0: number): ProtoBuf$CompilerPluginData$Builder;
}