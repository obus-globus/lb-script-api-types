import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class ContinuationHandler<T extends Object | number | string | boolean> extends Object implements BiFunction<T, Throwable, void> {
    constructor(cont: Continuation<T> | null)
    cont: Continuation<T> | null;
    andThen<V extends Object | number | string | boolean>(arg0: (param0: void) => V): (param0: T | null, param1: Throwable | null) => V;
    apply(result: T | null, exception: Throwable | null): void;
}