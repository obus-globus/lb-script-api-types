import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { ProgressiveFuture } from '../../../io/netty/util/concurrent/ProgressiveFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelProgressiveFuture extends ChannelFuture, ProgressiveFuture<void>, Object{
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelProgressiveFuture;
    addListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelProgressiveFuture;
    await(): ChannelProgressiveFuture;
    awaitUninterruptibly(): ChannelProgressiveFuture;
    channel(): Channel;
    isVoid(): boolean;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelProgressiveFuture;
    removeListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelProgressiveFuture;
    sync(): ChannelProgressiveFuture;
    syncUninterruptibly(): ChannelProgressiveFuture;
}