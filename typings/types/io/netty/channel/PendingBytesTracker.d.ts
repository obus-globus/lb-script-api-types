import type { PendingBytesTracker$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PendingBytesTracker extends Object implements MessageSizeEstimator$Handle {
    private constructor(arg0: MessageSizeEstimator$Handle)
    constructor(arg0: MessageSizeEstimator$Handle, arg1: PendingBytesTracker$1)
    // private estimatorHandle: MessageSizeEstimator$Handle;
    decrementPendingOutboundBytes(arg0: number): void;
    incrementPendingOutboundBytes(arg0: number): void;
    size(arg0: Object): number;
}