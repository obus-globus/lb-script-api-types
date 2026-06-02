import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
export interface DelayWithTimeoutDiagnostics extends Object, Delay{
    delay(time: number): void;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    timeoutMessage(timeout: Duration): string;
}