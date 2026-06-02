import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ValueParameterCountCheck } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/ValueParameterCountCheck.d.ts'
export class ValueParameterCountCheck$NoValueParameters extends ValueParameterCountCheck {
    static INSTANCE: ValueParameterCountCheck$NoValueParameters;
    private constructor()
    check(arg0: FunctionDescriptor): boolean;
}