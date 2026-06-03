import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class ArrayValue extends ConstantValue<ConstantValue<Object>[]> {
    constructor(arg0: ConstantValue<Object>[], arg1: (param0: ModuleDescriptor) => KotlinType)
    // private computeType: (param0: ModuleDescriptor) => KotlinType;
    getType(arg0: ModuleDescriptor): KotlinType;
}