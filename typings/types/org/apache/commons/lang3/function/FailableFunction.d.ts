import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface FailableFunction<T extends Object | number | string | boolean, R extends Object | number | string | boolean, E extends Throwable> extends Object{
    andThen(arg0: (param0: R) => E): (param0: T) => E;
    apply(arg0: T): R;
    compose(arg0: (param0: V) => E): (param0: V) => E;
}