import type { ProtoBuf$PropertyOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PropertyOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Contract } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Contract.d.ts'
import type { ProtoBuf$Property } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$Property$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Property, ProtoBuf$Property$Builder> implements ProtoBuf$PropertyOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private backingFieldAnnotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private contextParameter_: ProtoBuf$ValueParameter[];
    // private contextReceiverTypeId_: number[];
    // private contextReceiverType_: ProtoBuf$Type[];
    // private delegateFieldAnnotation_: ProtoBuf$Annotation[];
    // private extensionReceiverAnnotation_: ProtoBuf$Annotation[];
    // private flags_: number;
    // private getterAnnotation_: ProtoBuf$Annotation[];
    // private getterContract_: ProtoBuf$Contract;
    // private getterFlags_: number;
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
    // private versionRequirement_: number[];
    addAllAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Property$Builder;
    addAllBackingFieldAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Property$Builder;
    addAllCompilerPluginData(arg0: ProtoBuf$CompilerPluginData[]): ProtoBuf$Property$Builder;
    addAllContextParameter(arg0: ProtoBuf$ValueParameter[]): ProtoBuf$Property$Builder;
    addAllContextReceiverType(arg0: ProtoBuf$Type[]): ProtoBuf$Property$Builder;
    addAllDelegateFieldAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Property$Builder;
    addAllExtensionReceiverAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Property$Builder;
    addAllGetterAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Property$Builder;
    addAllSetterAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Property$Builder;
    addAllVersionRequirement(arg0: number[]): ProtoBuf$Property$Builder;
    addTypeParameter(arg0: ProtoBuf$TypeParameter): ProtoBuf$Property$Builder;
    build(): ProtoBuf$Property;
    buildPartial(): ProtoBuf$Property;
    clone(): ProtoBuf$Property$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureBackingFieldAnnotationIsMutable(): void;
    // private ensureCompilerPluginDataIsMutable(): void;
    // private ensureContextParameterIsMutable(): void;
    // private ensureContextReceiverTypeIdIsMutable(): void;
    // private ensureContextReceiverTypeIsMutable(): void;
    // private ensureDelegateFieldAnnotationIsMutable(): void;
    // private ensureExtensionReceiverAnnotationIsMutable(): void;
    // private ensureGetterAnnotationIsMutable(): void;
    // private ensureSetterAnnotationIsMutable(): void;
    // private ensureTypeParameterIsMutable(): void;
    // private ensureVersionRequirementIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getBackingFieldAnnotation(arg0: number): ProtoBuf$Annotation;
    getBackingFieldAnnotationCount(): number;
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getContextParameter(arg0: number): ProtoBuf$ValueParameter;
    getContextParameterCount(): number;
    getContextReceiverType(arg0: number): ProtoBuf$Type;
    getContextReceiverTypeCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Property;
    getDelegateFieldAnnotation(arg0: number): ProtoBuf$Annotation;
    getDelegateFieldAnnotationCount(): number;
    getExtensionReceiverAnnotation(arg0: number): ProtoBuf$Annotation;
    getExtensionReceiverAnnotationCount(): number;
    getGetterAnnotation(arg0: number): ProtoBuf$Annotation;
    getGetterAnnotationCount(): number;
    getGetterContract(): ProtoBuf$Contract;
    getReceiverType(): ProtoBuf$Type;
    getReturnType(): ProtoBuf$Type;
    getSetterAnnotation(arg0: number): ProtoBuf$Annotation;
    getSetterAnnotationCount(): number;
    getSetterContract(): ProtoBuf$Contract;
    getSetterValueParameter(): ProtoBuf$ValueParameter;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    hasGetterContract(): boolean;
    hasName(): boolean;
    hasReceiverType(): boolean;
    hasReturnType(): boolean;
    hasSetterContract(): boolean;
    hasSetterValueParameter(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Property): ProtoBuf$Property$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Property$Builder;
    mergeGetterContract(arg0: ProtoBuf$Contract): ProtoBuf$Property$Builder;
    mergeReceiverType(arg0: ProtoBuf$Type): ProtoBuf$Property$Builder;
    mergeReturnType(arg0: ProtoBuf$Type): ProtoBuf$Property$Builder;
    mergeSetterContract(arg0: ProtoBuf$Contract): ProtoBuf$Property$Builder;
    mergeSetterValueParameter(arg0: ProtoBuf$ValueParameter): ProtoBuf$Property$Builder;
    setFlags(arg0: number): ProtoBuf$Property$Builder;
    setGetterFlags(arg0: number): ProtoBuf$Property$Builder;
    setName(arg0: number): ProtoBuf$Property$Builder;
    setOldFlags(arg0: number): ProtoBuf$Property$Builder;
    setReceiverType(arg0: ProtoBuf$Type): ProtoBuf$Property$Builder;
    setReceiverTypeId(arg0: number): ProtoBuf$Property$Builder;
    setReturnType(arg0: ProtoBuf$Type): ProtoBuf$Property$Builder;
    setReturnTypeId(arg0: number): ProtoBuf$Property$Builder;
    setSetterFlags(arg0: number): ProtoBuf$Property$Builder;
    setSetterValueParameter(arg0: ProtoBuf$ValueParameter): ProtoBuf$Property$Builder;
}