import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOTriFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, V extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object {
    andThen(arg0: (param0: R) => W): (param0: T, param1: U, param2: V) => W;
    apply(arg0: T, arg1: U, arg2: V): R;
}