import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MethodAccessor extends Object {
    static makeArrayInvoker(paramarg0: Object, paramarg1: Method): (param0: (Object | null)[]) => Object | null;
    static makeDynamicArrayInvoker(paramarg0: Method): (param0: Object | null, param1: (Object | null)[]) => Object | null;
    static makeDynamicInvoker(paramarg0: Class<Object>, paramarg1: Method): Object | null;
    static makeInvoker(paramarg0: Class<Object>, paramarg1: Object, paramarg2: Method): Object | null;
    constructor()
}