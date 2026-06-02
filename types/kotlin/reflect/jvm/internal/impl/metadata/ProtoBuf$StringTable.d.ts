import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$StringTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTableOrBuilder.d.ts'
import type { ProtoBuf$StringTable$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTable$Builder.d.ts'
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
export class ProtoBuf$StringTable extends GeneratedMessageLite implements ProtoBuf$StringTableOrBuilder {
    static PARSER: Parser<ProtoBuf$StringTable>;
    static getDefaultInstance(): ProtoBuf$StringTable;
    static newBuilder(): ProtoBuf$StringTable$Builder;
    static newBuilder(paramarg0: ProtoBuf$StringTable): ProtoBuf$StringTable$Builder;
    static newRepeatedGeneratedExtension(paramarg0: Object | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<Object>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<Object, Object>;
    static newSingularGeneratedExtension(paramarg0: Object | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<Object>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<Object, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<Object, Object>>)
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private string_: (Object | null)[];
    // private unknownFields: number[];
    getDefaultInstanceForType(): ProtoBuf$StringTable;
    getParserForType(): Parser<ProtoBuf$StringTable>;
    getSerializedSize(): number;
    getString(arg0: number): string;
    getStringList(): (Object | null)[];
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$StringTable$Builder;
    toBuilder(): ProtoBuf$StringTable$Builder;
    writeTo(arg0: CodedOutputStream): void;
}