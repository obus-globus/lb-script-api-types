import type { ProtoBuf$ConstructorOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ConstructorOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$Constructor$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Constructor, ProtoBuf$Constructor$Builder> implements ProtoBuf$ConstructorOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private flags_: number;
    // private valueParameter_: ProtoBuf$ValueParameter[];
    // private versionRequirement_: number[];
    addAllAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Constructor$Builder;
    build(): ProtoBuf$Constructor;
    buildPartial(): ProtoBuf$Constructor;
    clone(): ProtoBuf$Constructor$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureCompilerPluginDataIsMutable(): void;
    // private ensureValueParameterIsMutable(): void;
    // private ensureVersionRequirementIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Constructor;
    getValueParameter(arg0: number): ProtoBuf$ValueParameter;
    getValueParameterCount(): number;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Constructor): ProtoBuf$Constructor$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Constructor$Builder;
    setFlags(arg0: number): ProtoBuf$Constructor$Builder;
}