import type { ProtoBuf$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$TypeOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Type$Argument } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument.d.ts'
import type { ProtoBuf$Type$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Builder.d.ts'
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
export class ProtoBuf$Type extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$Type> implements ProtoBuf$TypeOrBuilder {
    static PARSER: Parser<ProtoBuf$Type>;
    static getDefaultInstance(): ProtoBuf$Type;
    static newBuilder(): ProtoBuf$Type$Builder;
    static newBuilder(paramarg0: ProtoBuf$Type): ProtoBuf$Type$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: ProtoBuf$1)
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<GeneratedMessageLite$ExtendableMessage<any>, GeneratedMessageLite$ExtendableBuilder<any, any>>, arg1: ProtoBuf$1)
    private constructor(arg0: GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Type, any>)
    // private abbreviatedTypeId_: number;
    // private abbreviatedType_: ProtoBuf$Type;
    // private annotation_: ProtoBuf$Annotation[];
    // private argument_: ProtoBuf$Type$Argument[];
    // private bitField0_: number;
    // private className_: number;
    // private flags_: number;
    // private flexibleTypeCapabilitiesId_: number;
    // private flexibleUpperBoundId_: number;
    // private flexibleUpperBound_: ProtoBuf$Type;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private nullable_: boolean;
    // private outerTypeId_: number;
    // private outerType_: ProtoBuf$Type;
    // private typeAliasName_: number;
    // private typeParameterName_: number;
    // private typeParameter_: number;
    // private unknownFields: number[];
    getAbbreviatedType(): ProtoBuf$Type;
    getAbbreviatedTypeId(): number;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getArgument(arg0: number): ProtoBuf$Type$Argument;
    getArgumentCount(): number;
    getArgumentList(): ProtoBuf$Type$Argument[];
    getClassName(): number;
    getDefaultInstanceForType(): ProtoBuf$Type;
    getFlags(): number;
    getFlexibleTypeCapabilitiesId(): number;
    getFlexibleUpperBound(): ProtoBuf$Type;
    getFlexibleUpperBoundId(): number;
    getNullable(): boolean;
    getOuterType(): ProtoBuf$Type;
    getOuterTypeId(): number;
    getParserForType(): Parser<ProtoBuf$Type>;
    getSerializedSize(): number;
    getTypeAliasName(): number;
    getTypeParameter(): number;
    getTypeParameterName(): number;
    hasAbbreviatedType(): boolean;
    hasAbbreviatedTypeId(): boolean;
    hasClassName(): boolean;
    hasFlags(): boolean;
    hasFlexibleTypeCapabilitiesId(): boolean;
    hasFlexibleUpperBound(): boolean;
    hasFlexibleUpperBoundId(): boolean;
    hasNullable(): boolean;
    hasOuterType(): boolean;
    hasOuterTypeId(): boolean;
    hasTypeAliasName(): boolean;
    hasTypeParameter(): boolean;
    hasTypeParameterName(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Type$Builder;
    toBuilder(): ProtoBuf$Type$Builder;
    writeTo(arg0: CodedOutputStream): void;
}