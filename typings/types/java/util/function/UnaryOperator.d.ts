import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface UnaryOperator<T extends Object | number | string | boolean> extends Function<T, T>, Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: T) => V): (param0: T) => V;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => T): (param0: V) => T;
}