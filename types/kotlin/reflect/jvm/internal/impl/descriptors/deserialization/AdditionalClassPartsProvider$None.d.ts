import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
export class AdditionalClassPartsProvider$None extends Object implements AdditionalClassPartsProvider {
    static INSTANCE: AdditionalClassPartsProvider$None;
    private constructor()
    getConstructors(arg0: ClassDescriptor): E[];
    getFunctions(arg0: Name, arg1: ClassDescriptor): E[];
    getFunctionsNames(arg0: ClassDescriptor): E[];
    getSupertypes(arg0: ClassDescriptor): E[];
}