import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassConstructorDescriptor.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { SimpleFunctionDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SimpleFunctionDescriptor.d.ts'
import type { AdditionalClassPartsProvider } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/deserialization/AdditionalClassPartsProvider.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class AdditionalClassPartsProvider$None extends Object implements AdditionalClassPartsProvider {
    static INSTANCE: AdditionalClassPartsProvider$None;
    private constructor()
    getConstructors(arg0: ClassDescriptor): ClassConstructorDescriptor[];
    getFunctions(arg0: Name, arg1: ClassDescriptor): SimpleFunctionDescriptor[];
    getFunctionsNames(arg0: ClassDescriptor): Name[];
    getSupertypes(arg0: ClassDescriptor): KotlinType[];
}