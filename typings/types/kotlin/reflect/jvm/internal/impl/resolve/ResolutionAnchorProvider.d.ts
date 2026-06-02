import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
export interface ResolutionAnchorProvider extends Object{
    getResolutionAnchor(arg0: ModuleDescriptor): ModuleDescriptor;
}