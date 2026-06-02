import type { FunctionDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/FunctionDescriptor.d.ts'
import type { ValueParameterCountCheck } from '../../../../../../kotlin/reflect/jvm/internal/impl/util/ValueParameterCountCheck.d.ts'
export class ValueParameterCountCheck$SingleValueParameter extends ValueParameterCountCheck {
    static INSTANCE: ValueParameterCountCheck$SingleValueParameter;
    private constructor()
    check(arg0: FunctionDescriptor): boolean;
}