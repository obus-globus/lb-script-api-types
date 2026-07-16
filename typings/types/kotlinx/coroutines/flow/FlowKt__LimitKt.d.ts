import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__LimitKt extends Object {
    static collectWhile<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object, paramarg2: Continuation<Object>): Object;
    static drop<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static dropWhile<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static take<T extends unknown>(paramarg0: Flow<T>, paramarg1: number): Flow<T>;
    static takeWhile<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static transformWhile<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
}