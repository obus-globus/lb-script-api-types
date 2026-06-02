import type { ProtoBuf$FunctionOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$FunctionOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$CompilerPluginData } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$CompilerPluginData.d.ts'
import type { ProtoBuf$Contract } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Contract.d.ts'
import type { ProtoBuf$Function } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Type } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { ProtoBuf$TypeParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeParameter.d.ts'
import type { ProtoBuf$TypeTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeTable.d.ts'
import type { ProtoBuf$ValueParameter } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ValueParameter.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$Function$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Function, ProtoBuf$Function$Builder> implements ProtoBuf$FunctionOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private contextParameter_: ProtoBuf$ValueParameter[];
    // private contextReceiverTypeId_: number[];
    // private contextReceiverType_: ProtoBuf$Type[];
    // private contract_: ProtoBuf$Contract;
    // private extensionReceiverAnnotation_: ProtoBuf$Annotation[];
    // private flags_: number;
    // private name_: number;
    // private oldFlags_: number;
    // private receiverTypeId_: number;
    // private receiverType_: ProtoBuf$Type;
    // private returnTypeId_: number;
    // private returnType_: ProtoBuf$Type;
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private typeTable_: ProtoBuf$TypeTable;
    // private valueParameter_: ProtoBuf$ValueParameter[];
    // private versionRequirement_: number[];
    addAllAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Function$Builder;
    addAllExtensionReceiverAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Function$Builder;
    build(): ProtoBuf$Function;
    buildPartial(): ProtoBuf$Function;
    clone(): ProtoBuf$Function$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureCompilerPluginDataIsMutable(): void;
    // private ensureContextParameterIsMutable(): void;
    // private ensureContextReceiverTypeIdIsMutable(): void;
    // private ensureContextReceiverTypeIsMutable(): void;
    // private ensureExtensionReceiverAnnotationIsMutable(): void;
    // private ensureTypeParameterIsMutable(): void;
    // private ensureValueParameterIsMutable(): void;
    // private ensureVersionRequirementIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getContextParameter(arg0: number): ProtoBuf$ValueParameter;
    getContextParameterCount(): number;
    getContextReceiverType(arg0: number): ProtoBuf$Type;
    getContextReceiverTypeCount(): number;
    getContract(): ProtoBuf$Contract;
    getDefaultInstanceForType(): ProtoBuf$Function;
    getExtensionReceiverAnnotation(arg0: number): ProtoBuf$Annotation;
    getExtensionReceiverAnnotationCount(): number;
    getReceiverType(): ProtoBuf$Type;
    getReturnType(): ProtoBuf$Type;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getTypeTable(): ProtoBuf$TypeTable;
    getValueParameter(arg0: number): ProtoBuf$ValueParameter;
    getValueParameterCount(): number;
    hasContract(): boolean;
    hasName(): boolean;
    hasReceiverType(): boolean;
    hasReturnType(): boolean;
    hasTypeTable(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeContract(arg0: ProtoBuf$Contract): ProtoBuf$Function$Builder;
    mergeFrom(arg0: ProtoBuf$Function): ProtoBuf$Function$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Function$Builder;
    mergeReceiverType(arg0: ProtoBuf$Type): ProtoBuf$Function$Builder;
    mergeReturnType(arg0: ProtoBuf$Type): ProtoBuf$Function$Builder;
    mergeTypeTable(arg0: ProtoBuf$TypeTable): ProtoBuf$Function$Builder;
    setFlags(arg0: number): ProtoBuf$Function$Builder;
    setName(arg0: number): ProtoBuf$Function$Builder;
    setOldFlags(arg0: number): ProtoBuf$Function$Builder;
    setReceiverTypeId(arg0: number): ProtoBuf$Function$Builder;
    setReturnTypeId(arg0: number): ProtoBuf$Function$Builder;
}