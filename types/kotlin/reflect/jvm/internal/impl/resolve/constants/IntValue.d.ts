import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { IntegerValueConstant } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/IntegerValueConstant.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class IntValue extends IntegerValueConstant<number> {
    constructor(arg0: number)
    getType(arg0: ModuleDescriptor): SimpleType;
}