import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmProtoBuf$JvmPropertySignatureOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmPropertySignatureOrBuilder.d.ts'
import type { JvmProtoBuf$JvmFieldSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmFieldSignature.d.ts'
import type { JvmProtoBuf$JvmMethodSignature } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmMethodSignature.d.ts'
import type { JvmProtoBuf$JvmPropertySignature$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$JvmPropertySignature$Builder.d.ts'
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
export class JvmProtoBuf$JvmPropertySignature extends GeneratedMessageLite implements JvmProtoBuf$JvmPropertySignatureOrBuilder {
    static PARSER: Parser<JvmProtoBuf$JvmPropertySignature>;
    static getDefaultInstance(): JvmProtoBuf$JvmPropertySignature;
    static newBuilder(): JvmProtoBuf$JvmPropertySignature$Builder;
    static newBuilder(paramarg0: JvmProtoBuf$JvmPropertySignature): JvmProtoBuf$JvmPropertySignature$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    // private bitField0_: number;
    // private delegateMethod_: JvmProtoBuf$JvmMethodSignature;
    // private field_: JvmProtoBuf$JvmFieldSignature;
    // private getter_: JvmProtoBuf$JvmMethodSignature;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private setter_: JvmProtoBuf$JvmMethodSignature;
    // private syntheticMethod_: JvmProtoBuf$JvmMethodSignature;
    // private unknownFields: number[];
    getDefaultInstanceForType(): JvmProtoBuf$JvmPropertySignature;
    getDelegateMethod(): JvmProtoBuf$JvmMethodSignature;
    getField(): JvmProtoBuf$JvmFieldSignature;
    getGetter(): JvmProtoBuf$JvmMethodSignature;
    getParserForType(): Parser<JvmProtoBuf$JvmPropertySignature>;
    getSerializedSize(): number;
    getSetter(): JvmProtoBuf$JvmMethodSignature;
    getSyntheticMethod(): JvmProtoBuf$JvmMethodSignature;
    hasDelegateMethod(): boolean;
    hasField(): boolean;
    hasGetter(): boolean;
    hasSetter(): boolean;
    hasSyntheticMethod(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): JvmProtoBuf$JvmPropertySignature$Builder;
    toBuilder(): JvmProtoBuf$JvmPropertySignature$Builder;
    writeTo(arg0: CodedOutputStream): void;
}