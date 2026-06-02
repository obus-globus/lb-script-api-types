import type { CheckedFunction } from '../../../../io/jsonwebtoken/impl/lang/CheckedFunction.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Supplier } from '../../../../io/jsonwebtoken/lang/Supplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PropagatingExceptionFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean, E extends RuntimeException> extends Object implements Function<T, R> {
    constructor(arg0: CheckedFunction<T, R>, arg1: Class<E>, arg2: Function<T, string>)
    constructor(arg0: CheckedFunction<T, R>, arg1: Class<E>, arg2: Supplier<string>)
    constructor(arg0: CheckedFunction<T, R>, arg1: Class<E>, arg2: string)
    constructor(arg0: Function<T, R>, arg1: Class<E>, arg2: string)
    // private clazz: Class<E>;
    // private function: CheckedFunction<T, R>;
    // private msgFunction: Function<T, string>;
    apply(arg0: T): R;
}