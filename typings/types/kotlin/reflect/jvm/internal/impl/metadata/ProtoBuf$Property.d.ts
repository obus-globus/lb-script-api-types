import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$PropertyOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PropertyOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Contract } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Contract.d.ts'
import type { ProtoBuf$Property$Builder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property$Builder.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
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
export class ProtoBuf$Property extends GeneratedMessageLite$ExtendableMessage<ProtoBuf$Property> implements ProtoBuf$PropertyOrBuilder {
    static PARSER: Parser<ProtoBuf$Property>;
    static getDefaultInstance(): ProtoBuf$Property;
    static newBuilder(): ProtoBuf$Property$Builder;
    static newBuilder(paramarg0: ProtoBuf$Property): ProtoBuf$Property$Builder;
    static newRepeatedGeneratedExtension(paramarg0: MessageLite | null, paramarg1: MessageLite, paramarg2: Internal$EnumLiteMap<Object>, paramarg3: number, paramarg4: WireFormat$FieldType, paramarg5: boolean, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    static newSingularGeneratedExtension(paramarg0: MessageLite | null, paramarg1: Object | null, paramarg2: MessageLite, paramarg3: Internal$EnumLiteMap<Object>, paramarg4: number, paramarg5: WireFormat$FieldType, paramarg6: Class<Object>): GeneratedMessageLite$GeneratedExtension<MessageLite, Object>;
    private constructor(arg0: boolean)
    private constructor(arg0: CodedInputStream, arg1: ExtensionRegistryLite)
    private constructor(arg0: GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Property, Object>)
    // private annotation_: ProtoBuf$Annotation[];
    // private backingFieldAnnotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private contextParameter_: ProtoBuf$ValueParameter[];
    // private contextReceiverTypeIdMemoizedSerializedSize: number;
    // private contextReceiverTypeId_: number[];
    // private contextReceiverType_: ProtoBuf$Type[];
    // private delegateFieldAnnotation_: ProtoBuf$Annotation[];
    // private extensionReceiverAnnotation_: ProtoBuf$Annotation[];
    // private flags_: number;
    // private getterAnnotation_: ProtoBuf$Annotation[];
    // private getterContract_: ProtoBuf$Contract;
    // private getterFlags_: number;
    // private memoizedIsInitialized: number;
    // private memoizedSerializedSize: number;
    // private name_: number;
    // private oldFlags_: number;
    // private receiverTypeId_: number;
    // private receiverType_: ProtoBuf$Type;
    // private returnTypeId_: number;
    // private returnType_: ProtoBuf$Type;
    // private setterAnnotation_: ProtoBuf$Annotation[];
    // private setterContract_: ProtoBuf$Contract;
    // private setterFlags_: number;
    // private setterValueParameter_: ProtoBuf$ValueParameter;
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private unknownFields: number[];
    // private versionRequirement_: number[];
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getAnnotationList(): ProtoBuf$Annotation[];
    getBackingFieldAnnotation(arg0: number): ProtoBuf$Annotation;
    getBackingFieldAnnotationCount(): number;
    getBackingFieldAnnotationList(): ProtoBuf$Annotation[];
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getContextParameter(arg0: number): ProtoBuf$ValueParameter;
    getContextParameterCount(): number;
    getContextParameterList(): ProtoBuf$ValueParameter[];
    getContextReceiverType(arg0: number): ProtoBuf$Type;
    getContextReceiverTypeCount(): number;
    getContextReceiverTypeIdList(): number[];
    getContextReceiverTypeList(): ProtoBuf$Type[];
    getDefaultInstanceForType(): ProtoBuf$Property;
    getDelegateFieldAnnotation(arg0: number): ProtoBuf$Annotation;
    getDelegateFieldAnnotationCount(): number;
    getDelegateFieldAnnotationList(): ProtoBuf$Annotation[];
    getExtensionReceiverAnnotation(arg0: number): ProtoBuf$Annotation;
    getExtensionReceiverAnnotationCount(): number;
    getExtensionReceiverAnnotationList(): ProtoBuf$Annotation[];
    getFlags(): number;
    getGetterAnnotation(arg0: number): ProtoBuf$Annotation;
    getGetterAnnotationCount(): number;
    getGetterAnnotationList(): ProtoBuf$Annotation[];
    getGetterContract(): ProtoBuf$Contract;
    getGetterFlags(): number;
    getName(): number;
    getOldFlags(): number;
    getParserForType(): Parser<ProtoBuf$Property>;
    getReceiverType(): ProtoBuf$Type;
    getReceiverTypeId(): number;
    getReturnType(): ProtoBuf$Type;
    getReturnTypeId(): number;
    getSerializedSize(): number;
    getSetterAnnotation(arg0: number): ProtoBuf$Annotation;
    getSetterAnnotationCount(): number;
    getSetterAnnotationList(): ProtoBuf$Annotation[];
    getSetterContract(): ProtoBuf$Contract;
    getSetterFlags(): number;
    getSetterValueParameter(): ProtoBuf$ValueParameter;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getTypeParameterList(): ProtoBuf$TypeParameter[];
    getVersionRequirementList(): number[];
    hasFlags(): boolean;
    hasGetterContract(): boolean;
    hasGetterFlags(): boolean;
    hasName(): boolean;
    hasOldFlags(): boolean;
    hasReceiverType(): boolean;
    hasReceiverTypeId(): boolean;
    hasReturnType(): boolean;
    hasReturnTypeId(): boolean;
    hasSetterContract(): boolean;
    hasSetterFlags(): boolean;
    hasSetterValueParameter(): boolean;
    // private initFields(): void;
    isInitialized(): boolean;
    newBuilderForType(): ProtoBuf$Property$Builder;
    toBuilder(): ProtoBuf$Property$Builder;
    writeTo(arg0: CodedOutputStream): void;
}