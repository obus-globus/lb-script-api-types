import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmProtoBuf$JvmMethodSignatureOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignatureOrBuilder.d.ts'
import type { JvmProtoBuf$JvmMethodSignature$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature$Builder.d.ts'
import type { CodedInputStream } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class JvmProtoBuf$JvmMethodSignature extends GeneratedMessageLite implements JvmProtoBuf$JvmMethodSignatureOrBuilder {
    static PARSER: Parser<JvmProtoBuf$JvmMethodSignature>;
    static getDefaultInstance(): JvmProtoBuf$JvmMethodSignature;
    static newBuilder(): JvmProtoBuf$JvmMethodSignature$Builder;
    static newBuilder(paramarg0: JvmProtoBuf$JvmMethodSignature): JvmProtoBuf$JvmMethodSignature$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    // private bitField0_: number;
    // private desc_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private unknownFields: number[];
    getDefaultInstanceForType(): JvmProtoBuf$JvmMethodSignature;
    getDesc(): number;
    getName(): number;
    getParserForType(): Parser<JvmProtoBuf$JvmMethodSignature>;
    getSerializedSize(): number;
    hasDesc(): boolean;
    hasName(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): JvmProtoBuf$JvmMethodSignature$Builder;
    toBuilder(): JvmProtoBuf$JvmMethodSignature$Builder;
    writeTo(arg0: CodedOutputStream): void;
}