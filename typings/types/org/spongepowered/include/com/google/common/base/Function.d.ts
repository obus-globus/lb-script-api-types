import type { Function as Function_2 } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Function<F extends unknown, T extends unknown> extends Function_2<F, T>, Object {
    andThen<V extends unknown>(arg0: (param0: T) => V): (param0: F) => V;
    apply(arg0: F): T;
    compose<V extends unknown>(arg0: (param0: V) => F): (param0: V) => T;
}