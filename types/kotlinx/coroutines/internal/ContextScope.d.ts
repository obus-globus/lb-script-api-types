import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class ContextScope extends Object implements CoroutineScope {
    constructor(context: CoroutineContext)
    readonly coroutineContext: CoroutineContext;
    toString(): string;
}