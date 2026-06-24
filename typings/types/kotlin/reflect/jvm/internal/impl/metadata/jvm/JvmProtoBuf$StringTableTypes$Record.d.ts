import type { JvmProtoBuf$1 } from '../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmProtoBuf$StringTableTypes$RecordOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$RecordOrBuilder.d.ts'
import type { JvmProtoBuf$StringTableTypes$Record$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Record$Builder.d.ts'
import type { JvmProtoBuf$StringTableTypes$Record$Operation } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Record$Operation.d.ts'
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
export class JvmProtoBuf$StringTableTypes$Record extends GeneratedMessageLite implements JvmProtoBuf$StringTableTypes$RecordOrBuilder {
    static PARSER: Parser<JvmProtoBuf$StringTableTypes$Record>;
    static getDefaultInstance(): JvmProtoBuf$StringTableTypes$Record;
    static newBuilder(): JvmProtoBuf$StringTableTypes$Record$Builder;
    static newBuilder(paramarg0: JvmProtoBuf$StringTableTypes$Record): JvmProtoBuf$StringTableTypes$Record$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: JvmProtoBuf$1)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>, arg1: JvmProtoBuf$1)
    // private bitField0_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private operation_: JvmProtoBuf$StringTableTypes$Record$Operation;
    // private predefinedIndex_: number;
    // private range_: number;
    // private replaceCharMemoizedSerializedSize: number;
    // private replaceChar_: number[];
    // private string_: Object;
    // private substringIndexMemoizedSerializedSize: number;
    // private substringIndex_: number[];
    // private unknownFields: number[];
    getDefaultInstanceForType(): JvmProtoBuf$StringTableTypes$Record;
    getOperation(): JvmProtoBuf$StringTableTypes$Record$Operation;
    getParserForType(): Parser<JvmProtoBuf$StringTableTypes$Record>;
    getPredefinedIndex(): number;
    getRange(): number;
    getReplaceCharCount(): number;
    getReplaceCharList(): number[];
    getSerializedSize(): number;
    getString(): string;
    getStringBytes(): number[];
    getSubstringIndexCount(): number;
    getSubstringIndexList(): number[];
    hasOperation(): boolean;
    hasPredefinedIndex(): boolean;
    hasRange(): boolean;
    hasString(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): JvmProtoBuf$StringTableTypes$Record$Builder;
    toBuilder(): JvmProtoBuf$StringTableTypes$Record$Builder;
    writeTo(arg0: CodedOutputStream): void;
}