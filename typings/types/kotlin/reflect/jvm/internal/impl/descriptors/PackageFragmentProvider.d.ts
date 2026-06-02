import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { FqName } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface PackageFragmentProvider extends Object{
    getPackageFragments(arg0: FqName): PackageFragmentDescriptor[];
    getSubPackagesOf(arg0: FqName, arg1: Function1<Name, boolean>): E[];
}