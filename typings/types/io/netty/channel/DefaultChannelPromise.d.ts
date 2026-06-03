import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFlushPromiseNotifier$FlushCheckpoint } from '../../../io/netty/channel/ChannelFlushPromiseNotifier$FlushCheckpoint.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { DefaultPromise } from '../../../io/netty/util/concurrent/DefaultPromise.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DefaultChannelPromise extends DefaultPromise<void> implements ChannelFlushPromiseNotifier$FlushCheckpoint, ChannelPromise {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: (Object | null)[])
    // private channel: Channel;
    // private checkpoint: number;
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelPromise;
    addListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelPromise;
    await(): ChannelPromise;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): ChannelPromise;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    channel(): Channel;
    checkDeadLock(): void;
    executor(): (Object | null)[];
    flushCheckpoint(): number;
    flushCheckpoint(arg0: number): void;
    isVoid(): boolean;
    promise(): ChannelPromise;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelPromise;
    removeListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelPromise;
    setFailure(arg0: Throwable): ChannelPromise;
    setSuccess(): ChannelPromise;
    setSuccess(arg0: void): ChannelPromise;
    sync(): ChannelPromise;
    syncUninterruptibly(): ChannelPromise;
    trySuccess(): boolean;
    trySuccess(arg0: void): boolean;
    unvoid(): ChannelPromise;
}