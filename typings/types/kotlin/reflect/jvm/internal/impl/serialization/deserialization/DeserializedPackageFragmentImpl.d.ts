import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ProtoBuf$PackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment.d.ts'
import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { NameResolverImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolverImpl.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { DeserializedPackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializedPackageFragment.d.ts'
import type { ProtoBasedClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ProtoBasedClassDataFinder.d.ts'
import type { DeserializedContainerSource } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/descriptors/DeserializedContainerSource.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export abstract class DeserializedPackageFragmentImpl extends DeserializedPackageFragment {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: FqName, arg1: StorageManager, arg2: ModuleDescriptor, arg3: ProtoBuf$PackageFragment, arg4: BinaryVersion, arg5: DeserializedContainerSource)
    // private _memberScope: MemberScope;
    // private _proto: ProtoBuf$PackageFragment;
    readonly classDataFinder: ProtoBasedClassDataFinder;
    // private containerSource: DeserializedContainerSource;
    // private metadataVersion: BinaryVersion;
    // private nameResolver: NameResolverImpl;
    getClassDataFinder(): ProtoBasedClassDataFinder;
    getMemberScope(): MemberScope;
    initialize(arg0: DeserializationComponents): void;
}