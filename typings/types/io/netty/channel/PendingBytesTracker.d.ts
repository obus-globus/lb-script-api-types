import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PendingBytesTracker extends Object implements MessageSizeEstimator$Handle {
    constructor(arg0: MessageSizeEstimator$Handle, arg1: any)
    // private estimatorHandle: MessageSizeEstimator$Handle;
    decrementPendingOutboundBytes(arg0: number): void;
    incrementPendingOutboundBytes(arg0: number): void;
    size(arg0: Object): number;
}