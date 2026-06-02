import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PackageViewDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageViewDescriptor.d.ts'
import type { ModuleDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDescriptorImpl.d.ts'
import type { PackageViewDescriptorFactory } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PackageViewDescriptorFactory.d.ts'
import type { PackageViewDescriptorFactory$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/PackageViewDescriptorFactory$Companion.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
export class PackageViewDescriptorFactory$Default extends Object implements PackageViewDescriptorFactory {
    static Companion: PackageViewDescriptorFactory$Companion;
    static INSTANCE: PackageViewDescriptorFactory$Default;
    private constructor()
    compute(arg0: ModuleDescriptorImpl, arg1: FqName, arg2: StorageManager): PackageViewDescriptor;
}