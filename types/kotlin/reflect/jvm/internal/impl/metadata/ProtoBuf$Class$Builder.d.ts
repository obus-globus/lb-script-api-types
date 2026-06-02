import type { ProtoBuf$ClassOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$ClassOrBuilder.d.ts'
import type { ProtoBuf$Annotation } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Annotation.d.ts'
import type { ProtoBuf$Class } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
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
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$Class$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Class, ProtoBuf$Class$Builder> implements ProtoBuf$ClassOrBuilder {
    private constructor()
    // private annotation_: ProtoBuf$Annotation[];
    // private bitField0_: number;
    // private companionObjectName_: number;
    // private compilerPluginData_: ProtoBuf$CompilerPluginData[];
    // private constructor_: ProtoBuf$Constructor[];
    // private contextReceiverTypeId_: number[];
    // private contextReceiverType_: ProtoBuf$Type[];
    // private enumEntry_: ProtoBuf$EnumEntry[];
    // private flags_: number;
    // private fqName_: number;
    // private function_: ProtoBuf$Function[];
    // private inlineClassUnderlyingPropertyName_: number;
    // private inlineClassUnderlyingTypeId_: number;
    // private inlineClassUnderlyingType_: ProtoBuf$Type;
    // private nestedClassName_: number[];
    // private property_: ProtoBuf$Property[];
    // private sealedSubclassFqName_: number[];
    // private supertypeId_: number[];
    // private supertype_: ProtoBuf$Type[];
    // private typeAlias_: ProtoBuf$TypeAlias[];
    // private typeParameter_: ProtoBuf$TypeParameter[];
    // private typeTable_: ProtoBuf$TypeTable;
    // private versionRequirementTable_: ProtoBuf$VersionRequirementTable;
    // private versionRequirement_: number[];
    addAllAnnotation(arg0: ProtoBuf$Annotation[]): ProtoBuf$Class$Builder;
    build(): ProtoBuf$Class;
    buildPartial(): ProtoBuf$Class;
    clone(): ProtoBuf$Class$Builder;
    // private ensureAnnotationIsMutable(): void;
    // private ensureCompilerPluginDataIsMutable(): void;
    // private ensureConstructorIsMutable(): void;
    // private ensureContextReceiverTypeIdIsMutable(): void;
    // private ensureContextReceiverTypeIsMutable(): void;
    // private ensureEnumEntryIsMutable(): void;
    // private ensureFunctionIsMutable(): void;
    // private ensureNestedClassNameIsMutable(): void;
    // private ensurePropertyIsMutable(): void;
    // private ensureSealedSubclassFqNameIsMutable(): void;
    // private ensureSupertypeIdIsMutable(): void;
    // private ensureSupertypeIsMutable(): void;
    // private ensureTypeAliasIsMutable(): void;
    // private ensureTypeParameterIsMutable(): void;
    // private ensureVersionRequirementIsMutable(): void;
    getAnnotation(arg0: number): ProtoBuf$Annotation;
    getAnnotationCount(): number;
    getCompilerPluginData(arg0: number): ProtoBuf$CompilerPluginData;
    getCompilerPluginDataCount(): number;
    getConstructor(arg0: number): ProtoBuf$Constructor;
    getConstructorCount(): number;
    getContextReceiverType(arg0: number): ProtoBuf$Type;
    getContextReceiverTypeCount(): number;
    getDefaultInstanceForType(): ProtoBuf$Class;
    getEnumEntry(arg0: number): ProtoBuf$EnumEntry;
    getEnumEntryCount(): number;
    getFunction(arg0: number): ProtoBuf$Function;
    getFunctionCount(): number;
    getInlineClassUnderlyingType(): ProtoBuf$Type;
    getProperty(arg0: number): ProtoBuf$Property;
    getPropertyCount(): number;
    getSupertype(arg0: number): ProtoBuf$Type;
    getSupertypeCount(): number;
    getTypeAlias(arg0: number): ProtoBuf$TypeAlias;
    getTypeAliasCount(): number;
    getTypeParameter(arg0: number): ProtoBuf$TypeParameter;
    getTypeParameterCount(): number;
    getTypeTable(): ProtoBuf$TypeTable;
    hasFqName(): boolean;
    hasInlineClassUnderlyingType(): boolean;
    hasTypeTable(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Class): ProtoBuf$Class$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Class$Builder;
    mergeInlineClassUnderlyingType(arg0: ProtoBuf$Type): ProtoBuf$Class$Builder;
    mergeTypeTable(arg0: ProtoBuf$TypeTable): ProtoBuf$Class$Builder;
    mergeVersionRequirementTable(arg0: ProtoBuf$VersionRequirementTable): ProtoBuf$Class$Builder;
    setCompanionObjectName(arg0: number): ProtoBuf$Class$Builder;
    setFlags(arg0: number): ProtoBuf$Class$Builder;
    setFqName(arg0: number): ProtoBuf$Class$Builder;
    setInlineClassUnderlyingPropertyName(arg0: number): ProtoBuf$Class$Builder;
    setInlineClassUnderlyingTypeId(arg0: number): ProtoBuf$Class$Builder;
}