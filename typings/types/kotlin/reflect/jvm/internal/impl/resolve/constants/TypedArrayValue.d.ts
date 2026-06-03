import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ArrayValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ArrayValue.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class TypedArrayValue extends ArrayValue {
    constructor(arg0: ConstantValue<Object>[], arg1: KotlinType)
    readonly type: KotlinType;
    getType(): KotlinType;
    getType(arg0: ModuleDescriptor): KotlinType;
}