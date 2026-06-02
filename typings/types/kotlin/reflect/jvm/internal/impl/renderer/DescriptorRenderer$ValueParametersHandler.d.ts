import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ValueParameterDescriptor.d.ts'
export interface DescriptorRenderer$ValueParametersHandler extends Object{
    appendAfterValueParameter(arg0: ValueParameterDescriptor, arg1: number, arg2: number, arg3: StringBuilder): void;
    appendAfterValueParameters(arg0: number, arg1: StringBuilder): void;
    appendBeforeValueParameter(arg0: ValueParameterDescriptor, arg1: number, arg2: number, arg3: StringBuilder): void;
    appendBeforeValueParameters(arg0: number, arg1: StringBuilder): void;
}