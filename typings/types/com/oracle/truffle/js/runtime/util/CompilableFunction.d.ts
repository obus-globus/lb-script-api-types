import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CompilableFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean> extends Function<T, R>, Object {
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}