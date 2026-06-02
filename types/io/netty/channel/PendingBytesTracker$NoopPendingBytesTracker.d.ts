import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { PendingBytesTracker } from '../../../io/netty/channel/PendingBytesTracker.d.ts'
export class PendingBytesTracker$NoopPendingBytesTracker extends PendingBytesTracker {
    constructor(arg0: MessageSizeEstimator$Handle)
    decrementPendingOutboundBytes(arg0: number): void;
    incrementPendingOutboundBytes(arg0: number): void;
}