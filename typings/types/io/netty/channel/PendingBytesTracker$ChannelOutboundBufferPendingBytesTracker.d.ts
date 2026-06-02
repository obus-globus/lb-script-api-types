import type { ChannelOutboundBuffer } from '../../../io/netty/channel/ChannelOutboundBuffer.d.ts'
import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { PendingBytesTracker } from '../../../io/netty/channel/PendingBytesTracker.d.ts'
export class PendingBytesTracker$ChannelOutboundBufferPendingBytesTracker extends PendingBytesTracker {
    constructor(arg0: ChannelOutboundBuffer, arg1: MessageSizeEstimator$Handle)
    // private buffer: ChannelOutboundBuffer;
    decrementPendingOutboundBytes(arg0: number): void;
    incrementPendingOutboundBytes(arg0: number): void;
}