import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDescriptorImpl.d.ts'
export interface ModuleDependencies extends Object{
    getAllDependencies(): ModuleDescriptorImpl[];
    getDirectExpectedByDependencies(): ModuleDescriptorImpl[];
    getModulesWhoseInternalsAreVisible(): ModuleDescriptorImpl[];
}