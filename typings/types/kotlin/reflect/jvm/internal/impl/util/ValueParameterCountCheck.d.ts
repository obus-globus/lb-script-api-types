import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { Check } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/Check.d.ts'
export abstract class ValueParameterCountCheck extends Object implements Check {
    private constructor(arg0: string)
    readonly description: string;
    getDescription(): string;
    invoke(arg0: FunctionDescriptor): string;
}