import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { ClassDescriptorFactory } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/ClassDescriptorFactory.d.ts'
import type { PlatformDependentDeclarationFilter } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/PlatformDependentDeclarationFilter.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export interface BuiltInsLoader extends Object{
    createPackageFragmentProvider(arg0: StorageManager, arg1: ModuleDescriptor, arg2: ClassDescriptorFactory[], arg3: PlatformDependentDeclarationFilter, arg4: AdditionalClassPartsProvider, arg5: boolean): PackageFragmentProvider;
}