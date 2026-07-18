import type { NettyDispatcher$CurrentContext } from '../../../../io/ktor/server/netty/NettyDispatcher$CurrentContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext$Key } from '../../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class NettyDispatcher$CurrentContextKey extends Object implements CoroutineContext$Key<NettyDispatcher$CurrentContext> {
    static INSTANCE: NettyDispatcher$CurrentContextKey;
}