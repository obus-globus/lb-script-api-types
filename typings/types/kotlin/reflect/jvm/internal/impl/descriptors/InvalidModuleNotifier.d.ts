import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
export interface InvalidModuleNotifier extends Object{
    notifyModuleInvalidated(arg0: ModuleDescriptor): void;
}