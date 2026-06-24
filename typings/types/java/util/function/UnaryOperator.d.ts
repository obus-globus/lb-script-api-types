import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface UnaryOperator<T extends unknown> extends Function<T, T>, Function<T, T>, Object {
    andThen<V extends unknown>(arg0: (param0: T) => V): (param0: T) => V;
    compose<V extends unknown>(arg0: (param0: V) => T): (param0: V) => T;
}