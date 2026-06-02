import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDependencies } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDependencies.d.ts'
import type { ModuleDescriptorImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/ModuleDescriptorImpl.d.ts'
export class ModuleDependenciesImpl extends Object implements ModuleDependencies {
    constructor(arg0: ModuleDescriptorImpl[], arg1: ModuleDescriptorImpl[], arg2: ModuleDescriptorImpl[], arg3: ModuleDescriptorImpl[])
    readonly allDependencies: ModuleDescriptorImpl[];
    // private allExpectedByDependencies: ModuleDescriptorImpl[];
    readonly directExpectedByDependencies: ModuleDescriptorImpl[];
    readonly modulesWhoseInternalsAreVisible: ModuleDescriptorImpl[];
    getAllDependencies(): ModuleDescriptorImpl[];
    getDirectExpectedByDependencies(): ModuleDescriptorImpl[];
    getModulesWhoseInternalsAreVisible(): ModuleDescriptorImpl[];
}