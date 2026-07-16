import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export class FlowKt__DistinctKt extends Object {
    static distinctUntilChanged<T extends unknown>(paramarg0: Flow<T>): Flow<T>;
    static distinctUntilChanged<T extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object, param1: Object) => boolean): Flow<T>;
    static distinctUntilChangedBy<T extends unknown, K extends unknown>(paramarg0: Flow<T>, paramarg1: (param0: Object) => K): Flow<T>;
}