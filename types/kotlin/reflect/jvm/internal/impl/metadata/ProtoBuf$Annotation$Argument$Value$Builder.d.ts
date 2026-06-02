import type { ProtoBuf$Annotation$Argument$ValueOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$ValueOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { ProtoBuf$Annotation$Argument$Value$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value$Type.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export class ProtoBuf$Annotation$Argument$Value$Builder extends GeneratedMessageLite$Builder<ProtoBuf$Annotation$Argument$Value, ProtoBuf$Annotation$Argument$Value$Builder> implements ProtoBuf$Annotation$Argument$ValueOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation;
    // private arrayDimensionCount_: number;
    // private arrayElement_: ProtoBuf$Annotation$Argument$Value[];
    // private bitField0_: number;
    // private classId_: number;
    // private doubleValue_: number;
    // private enumValueId_: number;
    // private flags_: number;
    // private floatValue_: number;
    // private intValue_: number;
    // private stringValue_: number;
    // private type_: ProtoBuf$Annotation$Argument$Value$Type;
    addArrayElement(arg0: ProtoBuf$Annotation$Argument$Value$Builder): ProtoBuf$Annotation$Argument$Value$Builder;
    build(): ProtoBuf$Annotation$Argument$Value;
    buildPartial(): ProtoBuf$Annotation$Argument$Value;
    clone(): ProtoBuf$Annotation$Argument$Value$Builder;
    // private ensureArrayElementIsMutable(): void;
    getAnnotation(): ProtoBuf$Annotation;
    getArrayElement(arg0: number): ProtoBuf$Annotation$Argument$Value;
    getArrayElementCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Annotation$Argument$Value;
    hasAnnotation(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeAnnotation(arg0: ProtoBuf$Annotation): ProtoBuf$Annotation$Argument$Value$Builder;
    mergeFrom(arg0: ProtoBuf$Annotation$Argument$Value): ProtoBuf$Annotation$Argument$Value$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Annotation$Argument$Value$Builder;
    setAnnotation(arg0: ProtoBuf$Annotation): ProtoBuf$Annotation$Argument$Value$Builder;
    setArrayDimensionCount(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setClassId(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setDoubleValue(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setEnumValueId(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setFlags(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setFloatValue(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setIntValue(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setStringValue(arg0: number): ProtoBuf$Annotation$Argument$Value$Builder;
    setType(arg0: ProtoBuf$Annotation$Argument$Value$Type): ProtoBuf$Annotation$Argument$Value$Builder;
}