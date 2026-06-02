import type { CheckedFunction } from '../../../../io/jsonwebtoken/impl/lang/CheckedFunction.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DelegatingCheckedFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object implements CheckedFunction<T, R> {
    constructor(arg0: Function<T, R>)
    // private delegate: Function<T, R>;
    apply(arg0: T): R;
}