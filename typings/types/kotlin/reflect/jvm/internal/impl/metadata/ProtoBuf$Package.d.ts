import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$PackageOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageOrBuilder.d.ts'
import type { ProtoBuf$Function } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package$Builder.d.ts'
import type { ProtoBuf$Property } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$TypeTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeTable.d.ts'
import type { ProtoBuf$VersionRequirementTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { CodedOutputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedOutputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
import type { GeneratedMessageLite$ExtendableMessage } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableMessage.d.ts'
import type { GeneratedMessageLite$GeneratedExtension } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$GeneratedExtension.d.ts'
import type { Internal$EnumLiteMap } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLiteMap.d.ts'
import type { MessageLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/MessageLite.d.ts'
import type { Parser } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Parser.d.ts'
import type { WireFormat$FieldType } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/WireFormat$FieldType.d.ts'
export class ProtoBuf$Package extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$Package> implements ProtoBuf$PackageOrBuilder {
    static PARSER: Parser<ProtoBuf$Package>;
    static getDefaultInstance(): ProtoBuf$Package;
    static newBuilder(): ProtoBuf$Package$Builder;
    static newBuilder(paramarg0: ProtoBuf$Package): ProtoBuf$Package$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static parseFrom(paramarg0: InputStream, paramarg1: ExtensionRegistryLite): ProtoBuf$Package;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<GeneratedMessageLite$ExtendableMessage<any>, GeneratedMessageLite$ExtendableBuilder<any, any>>, arg1: any)
    // private bitField0_: number;
    // private function_: ProtoBuf$Function[];
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private property_: ProtoBuf$Property[];
    // private typeAlias_: ProtoBuf$TypeAlias[];
    // private typeTable_: ProtoBuf$TypeTable;
    // private unknownFields: number[];
    // private versionRequirementTable_: ProtoBuf$VersionRequirementTable;
    getDefaultInstanceForType(): ProtoBuf$Package;
    getFunction(arg0: number): ProtoBuf$Function;
    getFunctionCount(): number;
    getFunctionList(): ProtoBuf$Function[];
    getParserForType(): Parser<ProtoBuf$Package>;
    getProperty(arg0: number): ProtoBuf$Property;
    getPropertyCount(): number;
    getPropertyList(): ProtoBuf$Property[];
    getSerializedSize(): number;
    getTypeAlias(arg0: number): ProtoBuf$TypeAlias;
    getTypeAliasCount(): number;
    getTypeAliasList(): ProtoBuf$TypeAlias[];
    getTypeTable(): ProtoBuf$TypeTable;
    getVersionRequirementTable(): ProtoBuf$VersionRequirementTable;
    hasTypeTable(): boolean;
    hasVersionRequirementTable(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Package$Builder;
    toBuilder(): ProtoBuf$Package$Builder;
    writeTo(arg0: CodedOutputStream): void;
}