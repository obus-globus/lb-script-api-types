import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { MutableSharedFlow } from '../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { MutableStateFlow } from '../../../kotlinx/coroutines/flow/MutableStateFlow.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
import type { SharingStarted } from '../../../kotlinx/coroutines/flow/SharingStarted.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class FlowKt__ShareKt extends Object {
    static asFlow<T extends unknown>(paramarg0: SharedFlow<T>): Flow<T>;
    static asSharedFlow<T extends unknown>(paramarg0: MutableSharedFlow<T>): SharedFlow<T>;
    static asStateFlow<T extends unknown>(paramarg0: MutableStateFlow<T>): StateFlow<T>;
    static onSubscription<T extends unknown>(paramarg0: SharedFlow<T>, paramarg1: (param0: Object, param1: Object) => Object): SharedFlow<T>;
    static onSubscription<T extends unknown>(paramarg0: StateFlow<T>, paramarg1: (param0: Object, param1: Object) => Object): StateFlow<T>;
    static shareIn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineScope, paramarg2: SharingStarted, paramarg3: number): SharedFlow<T>;
    static stateIn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineScope, paramarg2: Continuation<Object>): Object;
    static stateIn<T extends unknown>(paramarg0: Flow<T>, paramarg1: CoroutineScope, paramarg2: SharingStarted, paramarg3: T): StateFlow<T>;
}