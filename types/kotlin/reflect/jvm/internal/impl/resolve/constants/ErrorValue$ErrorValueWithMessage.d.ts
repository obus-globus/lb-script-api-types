import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { ErrorValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ErrorValue.d.ts'
import type { ErrorValue$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ErrorValue$Companion.d.ts'
import type { ErrorType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorType.d.ts'
export class ErrorValue$ErrorValueWithMessage extends ErrorValue {
    static Companion: ErrorValue$Companion;
    constructor(arg0: string)
    // private message: string;
    getType(arg0: ModuleDescriptor): ErrorType;
    toString(): string;
}