import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConstantFunction<T extends unknown, R extends unknown> extends Object implements Function<T, R> {
    constructor(arg0: R)
    // private value: R;
    apply(arg0: T): R;
}