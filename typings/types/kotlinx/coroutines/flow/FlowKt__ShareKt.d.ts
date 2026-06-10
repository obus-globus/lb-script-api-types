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
    static asSharedFlow(paramarg0: MutableSharedFlow<Object>): SharedFlow<Object>;
    static asStateFlow(paramarg0: MutableStateFlow<Object>): StateFlow<Object>;
    static onSubscription(paramarg0: SharedFlow<Object>, paramarg1: (param0: Object, param1: Object) => Object): SharedFlow<Object>;
    static shareIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope, paramarg2: SharingStarted, paramarg3: number): SharedFlow<Object>;
    static stateIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope, paramarg2: Continuation<Object>): Object;
    static stateIn(paramarg0: Flow<Object>, paramarg1: CoroutineScope, paramarg2: SharingStarted, paramarg3: Object | null): StateFlow<Object>;
}