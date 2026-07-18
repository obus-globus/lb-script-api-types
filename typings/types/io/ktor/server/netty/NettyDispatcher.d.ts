import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ContinuationInterceptor$Key } from '../../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class NettyDispatcher extends CoroutineDispatcher {
    static INSTANCE: NettyDispatcher;
    static Key: ContinuationInterceptor$Key;
    dispatch(context: CoroutineContext, block: () => void): void;
    isDispatchNeeded(context: CoroutineContext): boolean;
}