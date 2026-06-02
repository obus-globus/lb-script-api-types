import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { StdlibClassFinder } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/StdlibClassFinder.d.ts'
export class CliStdlibClassFinderImpl extends Object implements StdlibClassFinder {
    static INSTANCE: CliStdlibClassFinderImpl;
    private constructor()
    findEnumEntriesClass(arg0: ModuleDescriptor): ClassDescriptor;
}