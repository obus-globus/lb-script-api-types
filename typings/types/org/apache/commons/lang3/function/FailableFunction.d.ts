import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean, E extends Throwable> extends Object {
    andThen<V extends Object | number | string | boolean>(arg0: (param0: R) => V): (param0: T) => V;
    apply(arg0: T): R;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => T): (param0: V) => R;
}