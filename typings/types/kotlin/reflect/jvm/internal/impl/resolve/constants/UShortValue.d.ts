import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { UnsignedValueConstant } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/UnsignedValueConstant.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class UShortValue extends UnsignedValueConstant<number> {
    constructor(arg0: number)
    getType(arg0: ModuleDescriptor): KotlinType;
    toString(): string;
}