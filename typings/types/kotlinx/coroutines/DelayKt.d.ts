import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
export class DelayKt extends Object {
    static awaitCancellation(): void;
    static delay(timeMillis: number): void;
// (invalid TS: name contains '-')     static delay-VtjQ1oo(duration: Duration): void;
    static getDelay(paramarg0: CoroutineContext): Delay;
// (invalid TS: name contains '-')     static toDelayMillis-LRDsOJo(self: Duration): number;
}