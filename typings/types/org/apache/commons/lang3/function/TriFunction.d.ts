import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TriFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, V extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    andThen(arg0: (param0: R) => W): (param0: T, param1: U, param2: V) => W;
    apply(arg0: T, arg1: U, arg2: V): R;
}