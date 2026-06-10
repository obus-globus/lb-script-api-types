import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface PackageFragmentProviderOptimized extends Object, PackageFragmentProvider{
    collectPackageFragments(arg0: FqName, arg1: PackageFragmentDescriptor[]): void;
    isEmpty(arg0: FqName): boolean;
}