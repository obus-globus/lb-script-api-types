import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFlushPromiseNotifier$FlushCheckpoint } from '../../../io/netty/channel/ChannelFlushPromiseNotifier$FlushCheckpoint.d.ts'
import type { ChannelProgressivePromise } from '../../../io/netty/channel/ChannelProgressivePromise.d.ts'
import type { DefaultProgressivePromise } from '../../../io/netty/util/concurrent/DefaultProgressivePromise.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DefaultChannelProgressivePromise extends DefaultProgressivePromise<void> implements ChannelFlushPromiseNotifier$FlushCheckpoint, ChannelProgressivePromise {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: (Object | null)[])
    // private channel: Channel;
    // private checkpoint: number;
    addListener(arg0: GenericFutureListener<Future<void>>): ChannelProgressivePromise;
    addListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelProgressivePromise;
    await(): ChannelProgressivePromise;
    awaitUninterruptibly(): ChannelProgressivePromise;
    channel(): Channel;
    checkDeadLock(): void;
    executor(): (Object | null)[];
    flushCheckpoint(): number;
    flushCheckpoint(arg0: number): void;
    isVoid(): boolean;
    promise(): ChannelProgressivePromise;
    removeListener(arg0: GenericFutureListener<Future<void>>): ChannelProgressivePromise;
    removeListeners(arg0: GenericFutureListener<Future<void>>[]): ChannelProgressivePromise;
    setFailure(arg0: Throwable): ChannelProgressivePromise;
    setProgress(arg0: number, arg1: number): ChannelProgressivePromise;
    setSuccess(): ChannelProgressivePromise;
    setSuccess(arg0: void): ChannelProgressivePromise;
    sync(): ChannelProgressivePromise;
    syncUninterruptibly(): ChannelProgressivePromise;
    trySuccess(): boolean;
    unvoid(): ChannelProgressivePromise;
}