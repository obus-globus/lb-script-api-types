import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MethodAccessor extends Object {
    static makeArrayInvoker<R extends unknown>(paramarg0: Object, paramarg1: Method): (param0: Object[]) => R;
    static makeDynamicArrayInvoker<I extends unknown, R extends unknown>(paramarg0: Method): (param0: I, param1: Object[]) => R;
    static makeDynamicInvoker<I extends unknown>(paramarg0: Class<I>, paramarg1: Method): I;
    static makeInvoker<I extends unknown>(paramarg0: Class<I>, paramarg1: Object, paramarg2: Method): I;
    constructor()
}