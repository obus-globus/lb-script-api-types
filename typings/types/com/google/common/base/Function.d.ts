import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Function<F extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Function_2<F, T>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: T) => V): (param0: F) => V;
    apply(input: F): T;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => F): (param0: V) => T;
}