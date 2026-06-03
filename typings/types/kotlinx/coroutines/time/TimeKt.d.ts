import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
export class TimeKt extends Object {
    static debounce(paramarg0: Flow<Object>, paramarg1: Duration): Flow<Object>;
    static delay(paramarg0: Duration, paramarg1: Continuation<Object>): Object;
    static onTimeout(paramarg0: SelectBuilder<Object>, paramarg1: Duration, paramarg2: (param0: Object | null) => Object | null): void;
    static sample(paramarg0: Flow<Object>, paramarg1: Duration): Flow<Object>;
    static withTimeout(paramarg0: Duration, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
    static withTimeoutOrNull(paramarg0: Duration, paramarg1: (param0: Object | null, param1: Object | null) => Object | null, paramarg2: Continuation<Object>): Object;
}