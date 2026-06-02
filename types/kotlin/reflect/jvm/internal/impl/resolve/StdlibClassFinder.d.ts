import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
export interface StdlibClassFinder extends Object{
    findEnumEntriesClass(arg0: ModuleDescriptor): ClassDescriptor;
}