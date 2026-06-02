import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { PackageFragmentDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/PackageFragmentDescriptor.d.ts'
import type { LookupLocation } from '../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupLocation.d.ts'
import type { LookupTracker } from '../../../../../../kotlin/reflect/jvm/internal/impl/incremental/components/LookupTracker.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class UtilsKt extends Object {
    static record(paramarg0: LookupTracker, paramarg1: LookupLocation, paramarg2: ClassDescriptor, paramarg3: Name): void;
    static record(paramarg0: LookupTracker, paramarg1: LookupLocation, paramarg2: PackageFragmentDescriptor, paramarg3: Name): void;
    static recordPackageLookup(paramarg0: LookupTracker, paramarg1: LookupLocation, paramarg2: string, paramarg3: string): void;
}