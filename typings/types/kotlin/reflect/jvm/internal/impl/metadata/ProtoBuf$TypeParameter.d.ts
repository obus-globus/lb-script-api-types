import type { ProtoBuf$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$TypeParameterOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameterOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter$Builder.d.ts'
import type { ProtoBuf$TypeParameter$Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter$Variance.d.ts'
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
export class ProtoBuf$TypeParameter extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$TypeParameter> implements ProtoBuf$TypeParameterOrBuilder {
    static PARSER: Parser<ProtoBuf$TypeParameter>;
    static getDefaultInstance(): ProtoBuf$TypeParameter;
    static newBuilder(): ProtoBuf$TypeParameter$Builder;
    static newBuilder(paramarg0: ProtoBuf$TypeParameter): ProtoBuf$TypeParameter$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: ProtoBuf$1)
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<GeneratedMessageLite$ExtendableMessage<any>, GeneratedMessageLite$ExtendableBuilder<any, any>>, arg1: ProtoBuf$1)
    private constructor(arg0: GeneratedMessageLite$ExtendableBuilder<ProtoBuf$TypeParameter, any>)
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private id_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private reified_: boolean;
    // private unknownFields: number[];
    // private upperBoundIdMemoizedSerializedSize: number;
    // private upperBoundId_: number[];
    // private upperBound_: ProtoBuf$Type[];
    // private variance_: ProtoBuf$TypeParameter$Variance;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getDefaultInstanceForType(): ProtoBuf$TypeParameter;
    getId(): number;
    getName(): number;
    getParserForType(): Parser<ProtoBuf$TypeParameter>;
    getReified(): boolean;
    getSerializedSize(): number;
    getUpperBound(arg0: number): ProtoBuf$Type;
    getUpperBoundCount(): number;
    getUpperBoundIdList(): number[];
    getUpperBoundList(): ProtoBuf$Type[];
    getVariance(): ProtoBuf$TypeParameter$Variance;
    hasId(): boolean;
    hasName(): boolean;
    hasReified(): boolean;
    hasVariance(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$TypeParameter$Builder;
    toBuilder(): ProtoBuf$TypeParameter$Builder;
    writeTo(arg0: CodedOutputStream): void;
}