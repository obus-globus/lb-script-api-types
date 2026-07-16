import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { FlowCollector } from '../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
export class FlowKt__EmittersKt extends Object {
    static ensureActive(paramarg0: FlowCollector<Object>): void;
    static onCompletion<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<T>;
    static onEmpty<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static onStart<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => Object): Flow<T>;
    static transform<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
    static unsafeTransform<T extends unknown, R extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object, param2: Object) => Object): Flow<R>;
}