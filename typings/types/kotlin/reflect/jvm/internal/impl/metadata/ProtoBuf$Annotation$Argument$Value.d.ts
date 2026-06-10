import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Annotation$Argument$ValueOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$ValueOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value$Builder.d.ts'
import type { ProtoBuf$Annotation$Argument$Value$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value$Type.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class ProtoBuf$Annotation$Argument$Value extends GeneratedMessageLite implements ProtoBuf$Annotation$Argument$ValueOrBuilder {
    static PARSER: Parser<ProtoBuf$Annotation$Argument$Value>;
    static getDefaultInstance(): ProtoBuf$Annotation$Argument$Value;
    static newBuilder(): ProtoBuf$Annotation$Argument$Value$Builder;
    static newBuilder(paramarg0: ProtoBuf$Annotation$Argument$Value): ProtoBuf$Annotation$Argument$Value$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<Object>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<Object>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<Object, Object>>)
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
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private stringValue_: number;
    // private type_: ProtoBuf$Annotation$Argument$Value$Type;
    // private unknownFields: number[];
    getAnnotation(): ProtoBuf$Annotation;
    getArrayDimensionCount(): number;
    getArrayElement(arg0: number): ProtoBuf$Annotation$Argument$Value;
    getArrayElementCount(): number;
    getArrayElementList(): ProtoBuf$Annotation$Argument$Value[];
    getClassId(): number;
    getDefaultInstanceForType(): ProtoBuf$Annotation$Argument$Value;
    getDoubleValue(): number;
    getEnumValueId(): number;
    getFlags(): number;
    getFloatValue(): number;
    getIntValue(): number;
    getParserForType(): Parser<ProtoBuf$Annotation$Argument$Value>;
    getSerializedSize(): number;
    getStringValue(): number;
    getType(): ProtoBuf$Annotation$Argument$Value$Type;
    hasAnnotation(): boolean;
    hasArrayDimensionCount(): boolean;
    hasClassId(): boolean;
    hasDoubleValue(): boolean;
    hasEnumValueId(): boolean;
    hasFlags(): boolean;
    hasFloatValue(): boolean;
    hasIntValue(): boolean;
    hasStringValue(): boolean;
    hasType(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Annotation$Argument$Value$Builder;
    toBuilder(): ProtoBuf$Annotation$Argument$Value$Builder;
    writeTo(arg0: CodedOutputStream): void;
}