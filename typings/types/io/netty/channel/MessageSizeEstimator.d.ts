import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MessageSizeEstimator extends Object{
    newHandle(): MessageSizeEstimator$Handle;
}