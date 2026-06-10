import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProviderOptimized } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProviderOptimized.d.ts'
import type { JavaResolverComponents } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/JavaResolverComponents.d.ts'
import type { LazyJavaResolverContext } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/LazyJavaResolverContext.d.ts'
import type { LazyJavaPackageFragment } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/lazy/descriptors/LazyJavaPackageFragment.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { CacheWithNotNullValues } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/storage/CacheWithNotNullValues.d.ts'
export class LazyJavaPackageFragmentProvider extends Object implements PackageFragmentProviderOptimized {
    constructor(arg0: JavaResolverComponents)
    // private c: LazyJavaResolverContext;
    // private packageFragments: CacheWithNotNullValues<FqName, LazyJavaPackageFragment>;
    collectPackageFragments(arg0: FqName, arg1: PackageFragmentDescriptor[]): void;
    // private getPackageFragment(arg0: FqName): LazyJavaPackageFragment;
    getPackageFragments(arg0: FqName): LazyJavaPackageFragment[];
    getSubPackagesOf(arg0: FqName, arg1: (param0: Name) => boolean): FqName[];
    isEmpty(arg0: FqName): boolean;
    toString(): string;
}