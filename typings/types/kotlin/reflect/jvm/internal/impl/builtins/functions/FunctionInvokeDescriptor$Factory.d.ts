import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { FunctionClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassDescriptor.d.ts'
import type { FunctionInvokeDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionInvokeDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
export class FunctionInvokeDescriptor$Factory extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    create(arg0: FunctionClassDescriptor, arg1: boolean): FunctionInvokeDescriptor;
    // private createValueParameter(arg0: FunctionInvokeDescriptor, arg1: number, arg2: TypeParameterDescriptor): ValueParameterDescriptor;
}