import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelFuture extends Future<void>, Object{
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelFuture;
    addListeners(...arg0: GenericFutureListener<Future<void>>[]): ChannelFuture;
    await(): ChannelFuture;
    awaitUninterruptibly(): ChannelFuture;
    channel(): Channel;
    isVoid(): boolean;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelFuture;
    removeListeners(...arg0: GenericFutureListener<Future<void>>[]): ChannelFuture;
    sync(): ChannelFuture;
    syncUninterruptibly(): ChannelFuture;
}