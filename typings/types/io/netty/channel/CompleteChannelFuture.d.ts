import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { CompleteFuture } from '../../../io/netty/util/concurrent/CompleteFuture.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class CompleteChannelFuture extends CompleteFuture<void> implements ChannelFuture {
    constructor(arg0: Channel, arg1: (Object | null)[])
    // private channel: Channel;
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelFuture;
    addListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelFuture;
    await(): ChannelFuture;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): ChannelFuture;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    channel(): Channel;
    executor(): (Object | null)[];
    getNow(): void;
    isVoid(): boolean;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelFuture;
    removeListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelFuture;
    sync(): ChannelFuture;
    syncUninterruptibly(): ChannelFuture;
}