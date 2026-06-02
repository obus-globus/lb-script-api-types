import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Function<F extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Function<F, T>, Object{
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: F): T;
    compose(arg0: (param0: V) => T): (param0: V) => R;
}