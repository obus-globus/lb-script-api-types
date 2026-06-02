import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
export interface IOQuadFunction<T extends Object | number | string | boolean, U extends Object | number | string | boolean, V extends Object | number | string | boolean, W extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Object{
    andThen(arg0: (param0: R) => X): (param0: T, param1: U, param2: V, param3: W) => X;
    apply(arg0: T, arg1: U, arg2: V, arg3: W): R;
}