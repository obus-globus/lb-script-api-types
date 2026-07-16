import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
export class CoroutineScopeKt extends Object {
    static CoroutineScope(context: CoroutineContext): CoroutineScope;
    static MainScope(): CoroutineScope;
    static cancel(self: CoroutineScope, message: string, cause: Throwable | null): void;
    static cancel(self: CoroutineScope, cause: CancellationException | null): void;
    static coroutineScope<R extends unknown>(block: (param0: CoroutineScope) => R): R;
    static currentCoroutineContext(): CoroutineContext;
    static ensureActive(self: CoroutineScope): void;
    static isActive(paramarg0: CoroutineScope): boolean;
    static plus(self: CoroutineScope, context: CoroutineContext): CoroutineScope;
}