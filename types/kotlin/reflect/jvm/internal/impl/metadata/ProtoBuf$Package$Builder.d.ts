import type { ProtoBuf$PackageOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageOrBuilder.d.ts'
import type { ProtoBuf$Function } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Property } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$TypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeAlias.d.ts'
import type { ProtoBuf$TypeTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$TypeTable.d.ts'
import type { ProtoBuf$VersionRequirementTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirementTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$Package$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$Package, ProtoBuf$Package$Builder> implements ProtoBuf$PackageOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private function_: ProtoBuf$Function[];
    // private property_: ProtoBuf$Property[];
    // private typeAlias_: ProtoBuf$TypeAlias[];
    // private typeTable_: ProtoBuf$TypeTable;
    // private versionRequirementTable_: ProtoBuf$VersionRequirementTable;
    build(): ProtoBuf$Package;
    buildPartial(): ProtoBuf$Package;
    clone(): ProtoBuf$Package$Builder;
    // private ensureFunctionIsMutable(): void;
    // private ensurePropertyIsMutable(): void;
    // private ensureTypeAliasIsMutable(): void;
    getDefaultInstanceForType(): ProtoBuf$Package;
    getFunction(arg0: number): ProtoBuf$Function;
    getFunctionCount(): number;
    getProperty(arg0: number): ProtoBuf$Property;
    getPropertyCount(): number;
    getTypeAlias(arg0: number): ProtoBuf$TypeAlias;
    getTypeAliasCount(): number;
    getTypeTable(): ProtoBuf$TypeTable;
    hasTypeTable(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$Package): ProtoBuf$Package$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$Package$Builder;
    mergeTypeTable(arg0: ProtoBuf$TypeTable): ProtoBuf$Package$Builder;
    mergeVersionRequirementTable(arg0: ProtoBuf$VersionRequirementTable): ProtoBuf$Package$Builder;
}