import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$ExpressionOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ExpressionOrBuilder.d.ts'
import type { ProtoBuf$Expression$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression$Builder.d.ts'
import type { ProtoBuf$Expression$ConstantValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Expression$ConstantValue.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
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
export class ProtoBuf$Expression extends GeneratedMessageLite implements ProtoBuf$ExpressionOrBuilder {
    static PARSER: Parser<ProtoBuf$Expression>;
    static getDefaultInstance(): ProtoBuf$Expression;
    static newBuilder(): ProtoBuf$Expression$Builder;
    static newBuilder(paramarg0: ProtoBuf$Expression): ProtoBuf$Expression$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    // private andArgument_: ProtoBuf$Expression[];
    // private bitField0_: number;
    // private constantValue_: ProtoBuf$Expression$ConstantValue;
    // private flags_: number;
    // private isInstanceTypeId_: number;
    // private isInstanceType_: ProtoBuf$Type;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private orArgument_: ProtoBuf$Expression[];
    // private unknownFields: number[];
    // private valueParameterReference_: number;
    getAndArgument(arg0: number): ProtoBuf$Expression;
    getAndArgumentCount(): number;
    getAndArgumentList(): ProtoBuf$Expression[];
    getConstantValue(): ProtoBuf$Expression$ConstantValue;
    getDefaultInstanceForType(): ProtoBuf$Expression;
    getFlags(): number;
    getIsInstanceType(): ProtoBuf$Type;
    getIsInstanceTypeId(): number;
    getOrArgument(arg0: number): ProtoBuf$Expression;
    getOrArgumentCount(): number;
    getOrArgumentList(): ProtoBuf$Expression[];
    getParserForType(): Parser<ProtoBuf$Expression>;
    getSerializedSize(): number;
    getValueParameterReference(): number;
    hasConstantValue(): boolean;
    hasFlags(): boolean;
    hasIsInstanceType(): boolean;
    hasIsInstanceTypeId(): boolean;
    hasValueParameterReference(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Expression$Builder;
    toBuilder(): ProtoBuf$Expression$Builder;
    writeTo(arg0: CodedOutputStream): void;
}