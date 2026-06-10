import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$VersionRequirementTableOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementTableOrBuilder.d.ts'
import type { ProtoBuf$VersionRequirement } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement.d.ts'
import type { ProtoBuf$VersionRequirementTable$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementTable$Builder.d.ts'
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
export class ProtoBuf$VersionRequirementTable extends GeneratedMessageLite implements ProtoBuf$VersionRequirementTableOrBuilder {
    static PARSER: Parser<ProtoBuf$VersionRequirementTable>;
    static getDefaultInstance(): ProtoBuf$VersionRequirementTable;
    static newBuilder(): ProtoBuf$VersionRequirementTable$Builder;
    static newBuilder(paramarg0: ProtoBuf$VersionRequirementTable): ProtoBuf$VersionRequirementTable$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<Object>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<Object>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<Object, Object>>)
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private requirement_: ProtoBuf$VersionRequirement[];
    // private unknownFields: number[];
    getDefaultInstanceForType(): ProtoBuf$VersionRequirementTable;
    getParserForType(): Parser<ProtoBuf$VersionRequirementTable>;
    getRequirementCount(): number;
    getRequirementList(): ProtoBuf$VersionRequirement[];
    getSerializedSize(): number;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$VersionRequirementTable$Builder;
    toBuilder(): ProtoBuf$VersionRequirementTable$Builder;
    writeTo(arg0: CodedOutputStream): void;
}