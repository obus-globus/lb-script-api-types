import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PackageFragmentDescriptorImpl.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ClassDataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/ClassDataFinder.d.ts'
import type { DeserializationComponents } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationComponents.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export abstract class DeserializedPackageFragment extends PackageFragmentDescriptorImpl {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: FqName, arg1: StorageManager, arg2: ModuleDescriptor)
    // private storageManager: StorageManager;
    getClassDataFinder(): ClassDataFinder;
    hasTopLevelClass(arg0: Name): boolean;
    initialize(arg0: DeserializationComponents): void;
}