import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$TypeAliasOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAliasOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeAlias$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias$Builder.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
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
export class ProtoBuf$TypeAlias extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$TypeAlias> implements ProtoBuf$TypeAliasOrBuilder {
    static PARSER: Parser<ProtoBuf$TypeAlias>;
    static getDefaultInstance(): ProtoBuf$TypeAlias;
    static newBuilder(): ProtoBuf$TypeAlias$Builder;
    static newBuilder(paramarg0: ProtoBuf$TypeAlias): ProtoBuf$TypeAlias$Builder;
    static newRepeatedGeneratedExtension(paramarg0: Object | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<Object>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<Object, Object>;
    static newSingularGeneratedExtension(paramarg0: Object | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<Object>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<Object, Object>;
    static parseDelimitedFrom(paramarg0: InputStream, paramarg1: ExtensionRegistryLite): ProtoBuf$TypeAlias;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$ExtendableBuilder<ProtoBuf$TypeAlias, Object>)
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private expandedTypeId_: number;
    // private expandedType_: ProtoBuf$Type;
    // private flags_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private underlyingTypeId_: number;
    // private underlyingType_: ProtoBuf$Type;
    // private unknownFields: number[];
    // private versionRequirement_: number[];
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getDefaultInstanceForType(): ProtoBuf$TypeAlias;
    getExpandedType(): ProtoBuf$Type;
    getExpandedTypeId(): number;
    getFlags(): number;
    getName(): number;
    getParserForType(): Parser<ProtoBuf$TypeAlias>;
    getSerializedSize(): number;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getTypeParameterList(): ProtoBuf$TypeParameter[];
    getUnderlyingType(): ProtoBuf$Type;
    getUnderlyingTypeId(): number;
    getVersionRequirementList(): number[];
    hasExpandedType(): boolean;
    hasExpandedTypeId(): boolean;
    hasFlags(): boolean;
    hasName(): boolean;
    hasUnderlyingType(): boolean;
    hasUnderlyingTypeId(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$TypeAlias$Builder;
    toBuilder(): ProtoBuf$TypeAlias$Builder;
    writeTo(arg0: CodedOutputStream): void;
}