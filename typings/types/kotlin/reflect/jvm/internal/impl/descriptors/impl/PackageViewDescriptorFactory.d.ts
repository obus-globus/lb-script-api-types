import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { ModuleDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDescriptorImpl.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export interface PackageViewDescriptorFactory extends Object{
    compute(arg0: ModuleDescriptorImpl, arg1: FqName, arg2: StorageManager): PackageViewDescriptor;
}