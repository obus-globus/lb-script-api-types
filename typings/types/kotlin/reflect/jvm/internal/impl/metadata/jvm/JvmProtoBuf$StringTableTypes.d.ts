import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JvmProtoBuf$StringTableTypesOrBuilder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypesOrBuilder.d.ts'
import type { JvmProtoBuf$StringTableTypes$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Builder.d.ts'
import type { JvmProtoBuf$StringTableTypes$Record } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/JvmProtoBuf$StringTableTypes$Record.d.ts'
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
export class JvmProtoBuf$StringTableTypes extends GeneratedMessageLite implements JvmProtoBuf$StringTableTypesOrBuilder {
    static PARSER: Parser<JvmProtoBuf$StringTableTypes>;
    static getDefaultInstance(): JvmProtoBuf$StringTableTypes;
    static newBuilder(): JvmProtoBuf$StringTableTypes$Builder;
    static newBuilder(paramarg0: JvmProtoBuf$StringTableTypes): JvmProtoBuf$StringTableTypes$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static parseDelimitedFrom(paramarg0: InputStream, paramarg1: ExtensionRegistryLite): JvmProtoBuf$StringTableTypes;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>, arg1: any)
    // private localNameMemoizedSerializedSize: number;
    // private localName_: number[];
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private record_: JvmProtoBuf$StringTableTypes$Record[];
    // private unknownFields: number[];
    getDefaultInstanceForType(): JvmProtoBuf$StringTableTypes;
    getLocalNameList(): number[];
    getParserForType(): Parser<JvmProtoBuf$StringTableTypes>;
    getRecordList(): JvmProtoBuf$StringTableTypes$Record[];
    getSerializedSize(): number;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): JvmProtoBuf$StringTableTypes$Builder;
    toBuilder(): JvmProtoBuf$StringTableTypes$Builder;
    writeTo(arg0: CodedOutputStream): void;
}