import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export interface AdditionalClassPartsProvider extends Object{
    getConstructors(arg0: ClassDescriptor): E[];
    getFunctions(arg0: Name, arg1: ClassDescriptor): E[];
    getFunctionsNames(arg0: ClassDescriptor): E[];
    getSupertypes(arg0: ClassDescriptor): E[];
}