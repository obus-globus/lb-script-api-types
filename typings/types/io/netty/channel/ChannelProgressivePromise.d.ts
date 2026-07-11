import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelProgressiveFuture } from '../../../io/netty/channel/ChannelProgressiveFuture.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { ProgressivePromise } from '../../../io/netty/util/concurrent/ProgressivePromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface ChannelProgressivePromise extends ChannelProgressiveFuture, ChannelPromise, ProgressivePromise<void>, Object{
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelProgressivePromise;
    addListeners(...arg0: GenericFutureListener<Future<void>>[]): ChannelProgressivePromise;
    await(): ChannelProgressivePromise;
    awaitUninterruptibly(): ChannelProgressivePromise;
    channel(): Channel;
    isVoid(): boolean;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelProgressivePromise;
    removeListeners(...arg0: GenericFutureListener<Future<void>>[]): ChannelProgressivePromise;
    setFailure(arg0: Throwable): ChannelProgressivePromise;
    setProgress(arg0: number, arg1: number): ChannelProgressivePromise;
    setSuccess(): ChannelProgressivePromise;
    setSuccess(arg0: void): ChannelProgressivePromise;
    sync(): ChannelProgressivePromise;
    syncUninterruptibly(): ChannelProgressivePromise;
    trySuccess(): boolean;
    unvoid(): ChannelProgressivePromise;
}