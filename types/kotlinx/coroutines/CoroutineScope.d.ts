import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export interface CoroutineScope extends Object{
    readonly coroutineContext: CoroutineContext;
}