import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConstantValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/ConstantValue.d.ts'
export abstract class IntegerValueConstant<T extends Object | number | string | boolean> extends ConstantValue<T> {
    constructor(arg0: T)
}