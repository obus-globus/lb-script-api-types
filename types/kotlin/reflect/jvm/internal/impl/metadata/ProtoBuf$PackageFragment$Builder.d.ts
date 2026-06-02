import type { ProtoBuf$PackageFragmentOrBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragmentOrBuilder.d.ts'
import type { ProtoBuf$Class } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Package } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$PackageFragment } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment.d.ts'
import type { ProtoBuf$QualifiedNameTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$QualifiedNameTable.d.ts'
import type { ProtoBuf$StringTable } from '../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$StringTable.d.ts'
import type { CodedInputStream } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/CodedInputStream.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
import type { GeneratedMessageLite$ExtendableBuilder } from '../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$ExtendableBuilder.d.ts'
export class ProtoBuf$PackageFragment$Builder extends GeneratedMessageLite$ExtendableBuilder<ProtoBuf$PackageFragment, ProtoBuf$PackageFragment$Builder> implements ProtoBuf$PackageFragmentOrBuilder {
    private constructor()
    // private bitField0_: number;
    // private class__: ProtoBuf$Class[];
    // private package_: ProtoBuf$Package;
    // private qualifiedNames_: ProtoBuf$QualifiedNameTable;
    // private strings_: ProtoBuf$StringTable;
    build(): ProtoBuf$PackageFragment;
    buildPartial(): ProtoBuf$PackageFragment;
    clone(): ProtoBuf$PackageFragment$Builder;
    // private ensureClass_IsMutable(): void;
    getClass_(arg0: number): ProtoBuf$Class;
    getClass_Count(): number;
    getDefaultInstanceForType(): ProtoBuf$PackageFragment;
    getPackage(): ProtoBuf$Package;
    getQualifiedNames(): ProtoBuf$QualifiedNameTable;
    hasPackage(): boolean;
    hasQualifiedNames(): boolean;
    isInitialized(): boolean;
    // private maybeForceBuilderInitialization(): void;
    mergeFrom(arg0: ProtoBuf$PackageFragment): ProtoBuf$PackageFragment$Builder;
    mergeFrom(arg0: CodedInputStream, arg1: ExtensionRegistryLite): ProtoBuf$PackageFragment$Builder;
    mergePackage(arg0: ProtoBuf$Package): ProtoBuf$PackageFragment$Builder;
    mergeQualifiedNames(arg0: ProtoBuf$QualifiedNameTable): ProtoBuf$PackageFragment$Builder;
    mergeStrings(arg0: ProtoBuf$StringTable): ProtoBuf$PackageFragment$Builder;
}