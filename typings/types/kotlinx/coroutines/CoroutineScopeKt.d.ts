import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
export class CoroutineScopeKt extends Object {
    static CoroutineScope(paramarg0: CoroutineContext): CoroutineScope;
    static MainScope(): CoroutineScope;
    static cancel(paramarg0: CoroutineScope, paramarg1: string, paramarg2: Throwable): void;
    static cancel(paramarg0: CoroutineScope, paramarg1: CancellationException): void;
    static coroutineScope(paramarg0: Function2<Object, Object, Object>, paramarg1: Continuation<Object>): Object;
    static currentCoroutineContext(paramarg0: Continuation<Object>): Object;
    static ensureActive(paramarg0: CoroutineScope): void;
    static isActive(paramarg0: CoroutineScope): boolean;
    static plus(paramarg0: CoroutineScope, paramarg1: CoroutineContext): CoroutineScope;
}