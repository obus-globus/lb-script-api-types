import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class BooleanValue extends ConstantValue<boolean> {
    constructor(arg0: boolean)
    getType(arg0: ModuleDescriptor): SimpleType;
}