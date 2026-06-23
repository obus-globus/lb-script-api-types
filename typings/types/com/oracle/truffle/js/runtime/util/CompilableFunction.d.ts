import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CompilableFunction<T extends unknown, R extends unknown> extends Function<T, R>, Object {
    andThen<V extends unknown>(arg0: (param0: R) => V): (param0: T) => V;
    compose<V extends unknown>(arg0: (param0: V) => T): (param0: V) => R;
}