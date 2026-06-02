import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface ChannelPromise extends ChannelFuture, Promise<void>, Object{
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelPromise;
    addListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelPromise;
    await(): ChannelPromise;
    awaitUninterruptibly(): ChannelPromise;
    channel(): Channel;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelPromise;
    removeListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelPromise;
    setFailure(arg0: Throwable): ChannelPromise;
    setSuccess(): ChannelPromise;
    setSuccess(arg0: void): ChannelPromise;
    sync(): ChannelPromise;
    syncUninterruptibly(): ChannelPromise;
    trySuccess(): boolean;
    unvoid(): ChannelPromise;
}