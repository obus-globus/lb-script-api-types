import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface BiFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: T, arg1: U): R;
}