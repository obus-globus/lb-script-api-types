import type { PendingBytesTracker } from '../../../io/netty/channel/PendingBytesTracker.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PendingBytesTracker$DefaultChannelPipelinePendingBytesTracker extends PendingBytesTracker {
    constructor(arg0: (Object | null)[])
    // private pipeline: (Object | null)[];
    decrementPendingOutboundBytes(arg0: number): void;
    incrementPendingOutboundBytes(arg0: number): void;
}