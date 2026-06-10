import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { PackageFragmentProviderOptimized } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProviderOptimized.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class CompositePackageFragmentProvider extends Object implements PackageFragmentProviderOptimized {
    constructor(arg0: PackageFragmentProvider[], arg1: string)
    // private debugName: string;
    // private providers: PackageFragmentProvider[];
    collectPackageFragments(arg0: FqName, arg1: PackageFragmentDescriptor[]): void;
    getPackageFragments(arg0: FqName): PackageFragmentDescriptor[];
    getSubPackagesOf(arg0: FqName, arg1: (param0: Name) => boolean): FqName[];
    isEmpty(arg0: FqName): boolean;
    toString(): string;
}