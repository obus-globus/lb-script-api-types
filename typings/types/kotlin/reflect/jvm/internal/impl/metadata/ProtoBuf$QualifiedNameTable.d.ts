import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$QualifiedNameTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTableOrBuilder.d.ts'
import type { ProtoBuf$QualifiedNameTable$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$Builder.d.ts'
import type { ProtoBuf$QualifiedNameTable$QualifiedName } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable$QualifiedName.d.ts'
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
export class ProtoBuf$QualifiedNameTable extends GeneratedMessageLite implements ProtoBuf$QualifiedNameTableOrBuilder {
    static PARSER: Parser<ProtoBuf$QualifiedNameTable>;
    static getDefaultInstance(): ProtoBuf$QualifiedNameTable;
    static newBuilder(): ProtoBuf$QualifiedNameTable$Builder;
    static newBuilder(paramarg0: ProtoBuf$QualifiedNameTable): ProtoBuf$QualifiedNameTable$Builder;
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>)
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private qualifiedName_: ProtoBuf$QualifiedNameTable$QualifiedName[];
    // private unknownFields: number[];
    getDefaultInstanceForType(): ProtoBuf$QualifiedNameTable;
    getParserForType(): Parser<ProtoBuf$QualifiedNameTable>;
    getQualifiedName(arg0: number): ProtoBuf$QualifiedNameTable$QualifiedName;
    getQualifiedNameCount(): number;
    getSerializedSize(): number;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$QualifiedNameTable$Builder;
    toBuilder(): ProtoBuf$QualifiedNameTable$Builder;
    writeTo(arg0: CodedOutputStream): void;
}