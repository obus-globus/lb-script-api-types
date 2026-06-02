import type { ProtoBuf$ValueParameterOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameterOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$ValueParameter$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$ValueParameter, ProtoBuf$ValueParameter$Builder> implements ProtoBuf$ValueParameterOrBuilder {
    private constructor()
    // private annotationParameterDefaultValue_: ProtoBuf$Annotation$Argument$Value;
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private flags_: number;
    // private name_: number;
    // private typeId_: number;
    // private type_: ProtoBuf$Type;
    // private varargElementTypeId_: number;
    // private varargElementType_: ProtoBuf$Type;
    addAllAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$ValueParameter$Builder;
    build(): ProtoBuf$ValueParameter;
    buildPartial(): ProtoBuf$ValueParameter;
    clone(): ProtoBuf$ValueParameter$Builder;
    // private ensureAnnotationIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationParameterDefaultValue(): ProtoBuf$Annotation$Argument$Value;
    getDefaultInstanceForType(): ProtoBuf$ValueParameter;
    getType(): ProtoBuf$Type;
    getVarargElementType(): ProtoBuf$Type;
    hasAnnotationParameterDefaultValue(): boolean;
    hasName(): boolean;
    hasType(): boolean;
    hasVarargElementType(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeAnnotationParameterDefaultValue(arg0: ProtoBuf$Annotation$Argument$Value): ProtoBuf$ValueParameter$Builder;
    mergeFrom(arg0: ProtoBuf$ValueParameter): ProtoBuf$ValueParameter$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$ValueParameter$Builder;
    mergeType(arg0: ProtoBuf$Type): ProtoBuf$ValueParameter$Builder;
    mergeVarargElementType(arg0: ProtoBuf$Type): ProtoBuf$ValueParameter$Builder;
    setAnnotationParameterDefaultValue(arg0: ProtoBuf$Annotation$Argument$Value): ProtoBuf$ValueParameter$Builder;
    setFlags(arg0: number): ProtoBuf$ValueParameter$Builder;
    setName(arg0: number): ProtoBuf$ValueParameter$Builder;
    setType(arg0: ProtoBuf$Type): ProtoBuf$ValueParameter$Builder;
    setTypeId(arg0: number): ProtoBuf$ValueParameter$Builder;
    setVarargElementType(arg0: ProtoBuf$Type): ProtoBuf$ValueParameter$Builder;
    setVarargElementTypeId(arg0: number): ProtoBuf$ValueParameter$Builder;
}