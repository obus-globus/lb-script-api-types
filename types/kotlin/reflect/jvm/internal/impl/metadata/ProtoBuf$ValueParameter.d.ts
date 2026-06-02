import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$ValueParameterOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameterOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Annotation$Argument$Value } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation$Argument$Value.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$ValueParameter$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter$Builder.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
import type { GeneratedMessageLite$ExtendableMessage } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessage.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class ProtoBuf$ValueParameter extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$ValueParameter> implements ProtoBuf$ValueParameterOrBuilder {
    static PARSER: Parser<ProtoBuf$ValueParameter>;
    static getDefaultInstance(): ProtoBuf$ValueParameter;
    static newBuilder(): ProtoBuf$ValueParameter$Builder;
    static newBuilder(paramarg0: ProtoBuf$ValueParameter): ProtoBuf$ValueParameter$Builder;
    static newRepeatedGeneratedExtension(paramarg0: Object | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<Object>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<Object, Object>;
    static newSingularGeneratedExtension(paramarg0: Object | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<Object>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<Object, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$ExtendableBuilder<ProtoBuf$ValueParameter, Object>)
    // private annotationParameterDefaultValue_: ProtoBuf$Annotation$Argument$Value;
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private flags_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private typeId_: number;
    // private type_: ProtoBuf$Type;
    // private unknownFields: number[];
    // private varargElementTypeId_: number;
    // private varargElementType_: ProtoBuf$Type;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getAnnotationParameterDefaultValue(): ProtoBuf$Annotation$Argument$Value;
    getDefaultInstanceForType(): ProtoBuf$ValueParameter;
    getFlags(): number;
    getName(): number;
    getParserForType(): Parser<ProtoBuf$ValueParameter>;
    getSerializedSize(): number;
    getType(): ProtoBuf$Type;
    getTypeId(): number;
    getVarargElementType(): ProtoBuf$Type;
    getVarargElementTypeId(): number;
    hasAnnotationParameterDefaultValue(): boolean;
    hasFlags(): boolean;
    hasName(): boolean;
    hasType(): boolean;
    hasTypeId(): boolean;
    hasVarargElementType(): boolean;
    hasVarargElementTypeId(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$ValueParameter$Builder;
    toBuilder(): ProtoBuf$ValueParameter$Builder;
    writeTo(arg0: CodedOutputStream): void;
}