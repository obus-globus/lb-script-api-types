import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmProtoBuf$JvmFieldSignatureOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmFieldSignatureOrBuilder.d.ts'
import type { JvmProtoBuf$JvmFieldSignature$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmFieldSignature$Builder.d.ts'
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
export class JvmProtoBuf$JvmFieldSignature extends GeneratedMessageLite implements JvmProtoBuf$JvmFieldSignatureOrBuilder {
    static PARSER: Parser<JvmProtoBuf$JvmFieldSignature>;
    static getDefaultInstance(): JvmProtoBuf$JvmFieldSignature;
    static newBuilder(): JvmProtoBuf$JvmFieldSignature$Builder;
    static newBuilder(paramarg0: JvmProtoBuf$JvmFieldSignature): JvmProtoBuf$JvmFieldSignature$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>, arg1: any)
    // private bitField0_: number;
    // private desc_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private unknownFields: number[];
    getDefaultInstanceForType(): JvmProtoBuf$JvmFieldSignature;
    getDesc(): number;
    getName(): number;
    getParserForType(): Parser<JvmProtoBuf$JvmFieldSignature>;
    getSerializedSize(): number;
    hasDesc(): boolean;
    hasName(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): JvmProtoBuf$JvmFieldSignature$Builder;
    toBuilder(): JvmProtoBuf$JvmFieldSignature$Builder;
    writeTo(arg0: CodedOutputStream): void;
}