import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { SelectBuilder } from '../../../kotlinx/coroutines/selects/SelectBuilder.d.ts'
export class TimeKt extends Object {
    static debounce<T extends unknown>(self: Flow<T>, timeout: Duration): Flow<T>;
    static delay(duration: Duration): void;
    static onTimeout<R extends unknown>(self: SelectBuilder<R>, duration: Duration, block: () => R): void;
    static sample<T extends unknown>(self: Flow<T>, period: Duration): Flow<T>;
    static withTimeout<T extends unknown>(duration: Duration, block: (param0: CoroutineScope) => T): T;
    static withTimeoutOrNull<T extends unknown>(duration: Duration, block: (param0: CoroutineScope) => T): T | null;
}