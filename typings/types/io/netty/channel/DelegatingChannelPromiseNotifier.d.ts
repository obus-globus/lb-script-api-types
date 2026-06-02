import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DelegatingChannelPromiseNotifier extends Object implements ChannelFutureListener, ChannelPromise {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(arg0: ChannelPromise)
    constructor(arg0: ChannelPromise, arg1: boolean)
    // private delegate: ChannelPromise;
    // private logNotifyFailure: boolean;
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelPromise;
    addListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelPromise;
    await(): ChannelPromise;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): ChannelPromise;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    cancel(arg0: boolean): boolean;
    cause(): Throwable;
    channel(): Channel;
    get(): void;
    get(arg0: number, arg1: TimeUnit): void;
    getNow(): void;
    isCancellable(): boolean;
    isCancelled(): boolean;
    isDone(): boolean;
    isSuccess(): boolean;
    isVoid(): boolean;
    operationComplete(arg0: ChannelFuture): void;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelPromise;
    removeListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelPromise;
    setFailure(arg0: Throwable): ChannelPromise;
    setSuccess(): ChannelPromise;
    setSuccess(arg0: void): ChannelPromise;
    setUncancellable(): boolean;
    sync(): ChannelPromise;
    syncUninterruptibly(): ChannelPromise;
    tryFailure(arg0: Throwable): boolean;
    trySuccess(): boolean;
    trySuccess(arg0: void): boolean;
    unvoid(): ChannelPromise;
}