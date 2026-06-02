import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
export class GlobalScope extends Object implements CoroutineScope {
    static INSTANCE: GlobalScope;
    readonly coroutineContext: CoroutineContext;
}