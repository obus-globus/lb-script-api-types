import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelFlushPromiseNotifier$FlushCheckpoint extends Object{
    flushCheckpoint(): number;
    flushCheckpoint(arg0: number): void;
    promise(): ChannelPromise;
}