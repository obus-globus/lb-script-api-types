import type { ChannelFlushPromiseNotifier$FlushCheckpoint } from '../../../io/netty/channel/ChannelFlushPromiseNotifier$FlushCheckpoint.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelFlushPromiseNotifier$DefaultFlushCheckpoint extends Object implements ChannelFlushPromiseNotifier$FlushCheckpoint {
    constructor(arg0: number, arg1: ChannelPromise)
    // private checkpoint: number;
    // private future: ChannelPromise;
    flushCheckpoint(): number;
    flushCheckpoint(arg0: number): void;
    promise(): ChannelPromise;
}