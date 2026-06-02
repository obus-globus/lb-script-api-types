import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
export class JvmBuiltIns$Settings extends Object {
    constructor(arg0: ModuleDescriptor, arg1: boolean)
    // private isAdditionalBuiltInsFeatureSupported: boolean;
    readonly ownerModuleDescriptor: ModuleDescriptor;
    getOwnerModuleDescriptor(): ModuleDescriptor;
    isAdditionalBuiltInsFeatureSupported(): boolean;
}