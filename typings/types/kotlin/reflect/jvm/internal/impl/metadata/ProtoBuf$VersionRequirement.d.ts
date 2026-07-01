import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$VersionRequirementOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementOrBuilder.d.ts'
import type { ProtoBuf$VersionRequirement$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement$Builder.d.ts'
import type { ProtoBuf$VersionRequirement$Level } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement$Level.d.ts'
import type { ProtoBuf$VersionRequirement$VersionKind } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement$VersionKind.d.ts'
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
export class ProtoBuf$VersionRequirement extends GeneratedMessageLite implements ProtoBuf$VersionRequirementOrBuilder {
    static PARSER: Parser<ProtoBuf$VersionRequirement>;
    static getDefaultInstance(): ProtoBuf$VersionRequirement;
    static newBuilder(): ProtoBuf$VersionRequirement$Builder;
    static newBuilder(paramarg0: ProtoBuf$VersionRequirement): ProtoBuf$VersionRequirement$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$Builder<GeneratedMessageLite, GeneratedMessageLite$Builder<any, any>>, arg1: any)
    // private bitField0_: number;
    // private errorCode_: number;
    // private level_: ProtoBuf$VersionRequirement$Level;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private message_: number;
    // private unknownFields: number[];
    // private versionFull_: number;
    // private versionKind_: ProtoBuf$VersionRequirement$VersionKind;
    // private version_: number;
    getDefaultInstanceForType(): ProtoBuf$VersionRequirement;
    getErrorCode(): number;
    getLevel(): ProtoBuf$VersionRequirement$Level;
    getMessage(): number;
    getParserForType(): Parser<ProtoBuf$VersionRequirement>;
    getSerializedSize(): number;
    getVersion(): number;
    getVersionFull(): number;
    getVersionKind(): ProtoBuf$VersionRequirement$VersionKind;
    hasErrorCode(): boolean;
    hasLevel(): boolean;
    hasMessage(): boolean;
    hasVersion(): boolean;
    hasVersionFull(): boolean;
    hasVersionKind(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$VersionRequirement$Builder;
    toBuilder(): ProtoBuf$VersionRequirement$Builder;
    writeTo(arg0: CodedOutputStream): void;
}