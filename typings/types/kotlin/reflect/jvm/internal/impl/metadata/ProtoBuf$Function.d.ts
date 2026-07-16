import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$FunctionOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$FunctionOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Contract } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Contract.d.ts'
import type { ProtoBuf$Function$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function$Builder.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$TypeTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeTable.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
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
export class ProtoBuf$Function extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$Function> implements ProtoBuf$FunctionOrBuilder {
    static PARSER: Parser<ProtoBuf$Function>;
    static getDefaultInstance(): ProtoBuf$Function;
    static newBuilder(): ProtoBuf$Function$Builder;
    static newBuilder(paramarg0: ProtoBuf$Function): ProtoBuf$Function$Builder;
    static newRepeatedGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<any>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static newSingularGeneratedExtension<ContainingType extends MessageLite, Type extends unknown>(paramarg0: ContainingType, paramarg1: Type, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<any>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<ContainingType, Type>;
    static parseFrom(paramarg0: InputStream, paramarg1: ExtensionRegistryLite): ProtoBuf$Function;
    constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite, arg2: any)
    constructor(arg0: GeneratedMessageLite$ExtendableBuilder<GeneratedMessageLite$ExtendableMessage<any>, GeneratedMessageLite$ExtendableBuilder<any, any>>, arg1: any)
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private contextParameter_: ProtoBuf$ValueParameter[];
    // private contextReceiverTypeIdMemoizedSerializedSize: number;
    // private contextReceiverTypeId_: number[];
    // private contextReceiverType_: ProtoBuf$Type[];
    // private contract_: ProtoBuf$Contract;
    // private extensionReceiverAnnotation_: ProtoBuf$Annotation[];
    // private flags_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private oldFlags_: number;
    // private receiverTypeId_: number;
    // private receiverType_: ProtoBuf$Type;
    // private returnTypeId_: number;
    // private returnType_: ProtoBuf$Type;
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private typeTable_: ProtoBuf$TypeTable;
    // private unknownFields: number[];
    // private valueParameter_: ProtoBuf$ValueParameter[];
    // private versionRequirement_: number[];
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getCompilerPluginDataList(): ProtoBuf$CompilerPluginData[];
    getContextParameter(arg0: number): ProtoBuf$ValueParameter;
    getContextParameterCount(): number;
    getContextParameterList(): ProtoBuf$ValueParameter[];
    getContextReceiverType(arg0: number): ProtoBuf$Type;
    getContextReceiverTypeCount(): number;
    getContextReceiverTypeIdList(): number[];
    getContextReceiverTypeList(): ProtoBuf$Type[];
    getContract(): ProtoBuf$Contract;
    getDefaultInstanceForType(): ProtoBuf$Function;
    getExtensionReceiverAnnotation(arg0: number): ProtoBuf$Annotation;
    getExtensionReceiverAnnotationCount(): number;
    getExtensionReceiverAnnotationList(): ProtoBuf$Annotation[];
    getFlags(): number;
    getName(): number;
    getOldFlags(): number;
    getParserForType(): Parser<ProtoBuf$Function>;
    getReceiverType(): ProtoBuf$Type;
    getReceiverTypeId(): number;
    getReturnType(): ProtoBuf$Type;
    getReturnTypeId(): number;
    getSerializedSize(): number;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getTypeParameterList(): ProtoBuf$TypeParameter[];
    getTypeTable(): ProtoBuf$TypeTable;
    getValueParameter(arg0: number): ProtoBuf$ValueParameter;
    getValueParameterCount(): number;
    getValueParameterList(): ProtoBuf$ValueParameter[];
    getVersionRequirementList(): number[];
    hasContract(): boolean;
    hasFlags(): boolean;
    hasName(): boolean;
    hasOldFlags(): boolean;
    hasReceiverType(): boolean;
    hasReceiverTypeId(): boolean;
    hasReturnType(): boolean;
    hasReturnTypeId(): boolean;
    hasTypeTable(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Function$Builder;
    toBuilder(): ProtoBuf$Function$Builder;
    writeTo(arg0: CodedOutputStream): void;
}