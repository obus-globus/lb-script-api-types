import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { PackageFragmentProvider } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentProvider.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class PackageFragmentProviderKt extends Object {
    static collectPackageFragmentsOptimizedIfPossible(paramarg0: PackageFragmentProvider, paramarg1: FqName, paramarg2: PackageFragmentDescriptor[]): void;
    static isEmpty(paramarg0: PackageFragmentProvider, paramarg1: FqName): boolean;
    static packageFragments(paramarg0: PackageFragmentProvider, paramarg1: FqName): PackageFragmentDescriptor[];
}