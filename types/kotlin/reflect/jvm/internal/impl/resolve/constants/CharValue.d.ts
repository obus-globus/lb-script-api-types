import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { IntegerValueConstant } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/IntegerValueConstant.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class CharValue extends IntegerValueConstant<string> {
    constructor(arg0: string)
    // private getPrintablePart(arg0: string): string;
    getType(arg0: ModuleDescriptor): SimpleType;
    // private isPrintableUnicode(arg0: string): boolean;
    toString(): string;
}