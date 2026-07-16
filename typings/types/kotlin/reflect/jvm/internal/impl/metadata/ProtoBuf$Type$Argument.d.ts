import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$Type$ArgumentOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$ArgumentOrBuilder.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$Type$Argument$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument$Builder.d.ts'
import type { ProtoBuf$Type$Argument$Projection } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type$Argument$Projection.d.ts'
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
export class ProtoBuf$Type$Argument extends GeneratedMessageLite implements ProtoBuf$Type$ArgumentOrBuilder {
    static PARSER: Parser<ProtoBuf$Type$Argument>;
    static getDefaultInstance(): ProtoBuf$Type$Argument;
    static newBuilder(): ProtoBuf$Type$Argument$Builder;
    static newBuilder(paramarg0: ProtoBuf$Type$Argument): ProtoBuf$Type$Argument$Builder;
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>, arg1: any)
    // private bitField0_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private projection_: ProtoBuf$Type$Argument$Projection;
    // private typeId_: number;
    // private type_: ProtoBuf$Type;
    // private unknownFields: number[];
    getDefaultInstanceForType(): ProtoBuf$Type$Argument;
    getParserForType(): Parser<ProtoBuf$Type$Argument>;
    getProjection(): ProtoBuf$Type$Argument$Projection;
    getSerializedSize(): number;
    getType(): ProtoBuf$Type;
    getTypeId(): number;
    hasProjection(): boolean;
    hasType(): boolean;
    hasTypeId(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Type$Argument$Builder;
    toBuilder(): ProtoBuf$Type$Argument$Builder;
    writeTo(arg0: CodedOutputStream): void;
}