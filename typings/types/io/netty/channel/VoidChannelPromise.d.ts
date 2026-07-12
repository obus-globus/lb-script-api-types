import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { AbstractFuture } from '../../../io/netty/util/concurrent/AbstractFuture.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class VoidChannelPromise extends AbstractFuture<void> implements ChannelPromise {
    constructor(arg0: Channel, arg1: boolean)
    // private channel: Channel;
    // private fireExceptionListener: ChannelFutureListener;
    addListener(arg0: GenericFutureListener<Future<void>>): VoidChannelPromise;
    addListeners(...arg0: GenericFutureListener<Future<void>>[]): VoidChannelPromise;
    await(): VoidChannelPromise;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): VoidChannelPromise;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    cancel(arg0: boolean): boolean;
    cause(): Throwable;
    channel(): Channel;
    // private fireException0(arg0: Throwable): void;
    getNow(): void;
    isCancellable(): boolean;
    isCancelled(): boolean;
    isDone(): boolean;
    isSuccess(): boolean;
    isVoid(): boolean;
    removeListener(arg0: GenericFutureListener<Future<void>>): VoidChannelPromise;
    removeListeners(...arg0: GenericFutureListener<Future<void>>[]): VoidChannelPromise;
    setFailure(arg0: Throwable): VoidChannelPromise;
    setSuccess(): VoidChannelPromise;
    setSuccess(arg0: void): VoidChannelPromise;
    setUncancellable(): boolean;
    sync(): VoidChannelPromise;
    syncUninterruptibly(): VoidChannelPromise;
    tryFailure(arg0: Throwable): boolean;
    trySuccess(): boolean;
    trySuccess(arg0: void): boolean;
    unvoid(): ChannelPromise;
}