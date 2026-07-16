import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$ClassOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ClassOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Class$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class$Builder.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$EnumEntry } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$EnumEntry.d.ts'
import type { ProtoBuf$Function } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Property } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
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
export class ProtoBuf$Class extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$Class> implements ProtoBuf$ClassOrBuilder {
    static PARSER: Parser<ProtoBuf$Class>;
    static getDefaultInstance(): ProtoBuf$Class;
    static newBuilder(): ProtoBuf$Class$Builder;
    static newBuilder(paramarg0: ProtoBuf$Class): ProtoBuf$Class$Builder;
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static parseFrom(paramarg0: InputStream, paramarg1: ExtensionRegistryLite): ProtoBuf$Class;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<GeneratedMessageLite$ExtendableMessage<any>, GeneratedMessageLite$ExtendableBuilder<any, any>>, arg1: any)
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private companionObjectName_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private constructor_: ProtoBuf$Constructor[];
    // private contextReceiverTypeIdMemoizedSerializedSize: number;
    // private contextReceiverTypeId_: number[];
    // private contextReceiverType_: ProtoBuf$Type[];
    // private enumEntry_: ProtoBuf$EnumEntry[];
    // private flags_: number;
    // private fqName_: number;
    // private function_: ProtoBuf$Function[];
    // private inlineClassUnderlyingPropertyName_: number;
    // private inlineClassUnderlyingTypeId_: number;
    // private inlineClassUnderlyingType_: ProtoBuf$Type;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private nestedClassNameMemoizedSerializedSize: number;
    // private nestedClassName_: number[];
    // private property_: ProtoBuf$Property[];
    // private sealedSubclassFqNameMemoizedSerializedSize: number;
    // private sealedSubclassFqName_: number[];
    // private supertypeIdMemoizedSerializedSize: number;
    // private supertypeId_: number[];
    // private supertype_: ProtoBuf$Type[];
    // private typeAlias_: ProtoBuf$TypeAlias[];
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private typeTable_: ProtoBuf$TypeTable;
    // private unknownFields: number[];
    // private versionRequirementTable_: ProtoBuf$VersionRequirementTable;
    // private versionRequirement_: number[];
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getCompanionObjectName(): number;
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getCompilerPluginDataList(): ProtoBuf$CompilerPluginData[];
    getConstructor(arg0: number): ProtoBuf$Constructor;
    getConstructorCount(): number;
    getConstructorList(): ProtoBuf$Constructor[];
    getContextReceiverType(arg0: number): ProtoBuf$Type;
    getContextReceiverTypeCount(): number;
    getContextReceiverTypeIdList(): number[];
    getContextReceiverTypeList(): ProtoBuf$Type[];
    getDefaultInstanceForType(): ProtoBuf$Class;
    getEnumEntry(arg0: number): ProtoBuf$EnumEntry;
    getEnumEntryCount(): number;
    getEnumEntryList(): ProtoBuf$EnumEntry[];
    getFlags(): number;
    getFqName(): number;
    getFunction(arg0: number): ProtoBuf$Function;
    getFunctionCount(): number;
    getFunctionList(): ProtoBuf$Function[];
    getInlineClassUnderlyingPropertyName(): number;
    getInlineClassUnderlyingType(): ProtoBuf$Type;
    getInlineClassUnderlyingTypeId(): number;
    getNestedClassNameList(): number[];
    getParserForType(): Parser<ProtoBuf$Class>;
    getProperty(arg0: number): ProtoBuf$Property;
    getPropertyCount(): number;
    getPropertyList(): ProtoBuf$Property[];
    getSealedSubclassFqNameList(): number[];
    getSerializedSize(): number;
    getSupertype(arg0: number): ProtoBuf$Type;
    getSupertypeCount(): number;
    getSupertypeIdList(): number[];
    getSupertypeList(): ProtoBuf$Type[];
    getTypeAlias(arg0: number): ProtoBuf$TypeAlias;
    getTypeAliasCount(): number;
    getTypeAliasList(): ProtoBuf$TypeAlias[];
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getTypeParameterList(): ProtoBuf$TypeParameter[];
    getTypeTable(): ProtoBuf$TypeTable;
    getVersionRequirementList(): number[];
    getVersionRequirementTable(): ProtoBuf$VersionRequirementTable;
    hasCompanionObjectName(): boolean;
    hasFlags(): boolean;
    hasFqName(): boolean;
    hasInlineClassUnderlyingPropertyName(): boolean;
    hasInlineClassUnderlyingType(): boolean;
    hasInlineClassUnderlyingTypeId(): boolean;
    hasTypeTable(): boolean;
    hasVersionRequirementTable(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Class$Builder;
    toBuilder(): ProtoBuf$Class$Builder;
    writeTo(arg0: CodedOutputStream): void;
}