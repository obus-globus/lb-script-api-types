import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export class InterruptibleKt extends Object {
    static runInterruptible<T extends unknown>(context: CoroutineContext, block: () => T): T;
}