import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProviderOptimized } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProviderOptimized.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class PackageFragmentProviderImpl extends Object implements PackageFragmentProviderOptimized {
    constructor(arg0: PackageFragmentDescriptor[])
    // private packageFragments: PackageFragmentDescriptor[];
    collectPackageFragments(arg0: FqName, arg1: PackageFragmentDescriptor[]): void;
    getPackageFragments(arg0: FqName): PackageFragmentDescriptor[];
    getSubPackagesOf(arg0: FqName, arg1: (param0: Name) => boolean): FqName[];
    isEmpty(arg0: FqName): boolean;
}