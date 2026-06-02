import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ModuleNameRetriever$Cache extends Object {
    constructor(getModuleMethod: Method | null, getDescriptorMethod: Method | null, nameMethod: Method | null)
    getDescriptorMethod: Method | null;
    getModuleMethod: Method | null;
    nameMethod: Method | null;
}