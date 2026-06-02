import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProviderOptimized } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProviderOptimized.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { DeserializedPackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializedPackageFragment.d.ts'
import type { KotlinMetadataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/KotlinMetadataFinder.d.ts'
import type { MemoizedFunctionToNullable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/MemoizedFunctionToNullable.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export abstract class AbstractDeserializedPackageFragmentProvider extends Object implements PackageFragmentProviderOptimized {
    constructor(arg0: StorageManager, arg1: KotlinMetadataFinder, arg2: ModuleDescriptor)
    // private components: DeserializationComponents;
    // private finder: KotlinMetadataFinder;
    // private fragments: MemoizedFunctionToNullable<FqName, PackageFragmentDescriptor>;
    // private moduleDescriptor: ModuleDescriptor;
    // private storageManager: StorageManager;
    collectPackageFragments(arg0: FqName, arg1: E[]): void;
    findPackage(arg0: FqName): DeserializedPackageFragment;
    getComponents(): DeserializationComponents;
    getFinder(): KotlinMetadataFinder;
    getModuleDescriptor(): ModuleDescriptor;
    getPackageFragments(arg0: FqName): PackageFragmentDescriptor[];
    getStorageManager(): StorageManager;
    getSubPackagesOf(arg0: FqName, arg1: Function1<Name, boolean>): E[];
    isEmpty(arg0: FqName): boolean;
    setComponents(arg0: DeserializationComponents): void;
}