import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
export abstract class UnsignedValueConstant<T extends unknown> extends ConstantValue<T> {
    constructor(arg0: T)
}