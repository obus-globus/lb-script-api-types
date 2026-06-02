import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProviderOptimized } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProviderOptimized.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class PackageFragmentProviderImpl extends Object implements PackageFragmentProviderOptimized {
    constructor(arg0: E[])
    // private packageFragments: E[];
    collectPackageFragments(arg0: FqName, arg1: E[]): void;
    getPackageFragments(arg0: FqName): PackageFragmentDescriptor[];
    getSubPackagesOf(arg0: FqName, arg1: Function1<Name, boolean>): E[];
    isEmpty(arg0: FqName): boolean;
}