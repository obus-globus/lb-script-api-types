import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { MessageSizeEstimator$Handle } from '../../../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractHttp2StreamChannel$FlowControlledFrameSizeEstimator extends Object implements MessageSizeEstimator {
    private constructor()
    newHandle(): MessageSizeEstimator$Handle;
}