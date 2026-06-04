import type { ChannelFlushPromiseNotifier$FlushCheckpoint } from '../../../io/netty/channel/ChannelFlushPromiseNotifier$FlushCheckpoint.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class ChannelFlushPromiseNotifier extends Object {
    constructor()
    constructor(arg0: boolean)
    // private flushCheckpoints: ChannelFlushPromiseNotifier$FlushCheckpoint[];
    // private tryNotify: boolean;
    // private writeCounter: number;
    add(arg0: ChannelPromise, arg1: number): ChannelFlushPromiseNotifier;
    increaseWriteCounter(arg0: number): ChannelFlushPromiseNotifier;
    notifyFlushFutures(): ChannelFlushPromiseNotifier;
    notifyFlushFutures(arg0: Throwable): ChannelFlushPromiseNotifier;
    notifyFlushFutures(arg0: Throwable, arg1: Throwable): ChannelFlushPromiseNotifier;
    notifyPromises(): ChannelFlushPromiseNotifier;
    notifyPromises(arg0: Throwable): ChannelFlushPromiseNotifier;
    notifyPromises(arg0: Throwable, arg1: Throwable): ChannelFlushPromiseNotifier;
    // private notifyPromises0(arg0: Throwable): void;
    writeCounter(): number;
}