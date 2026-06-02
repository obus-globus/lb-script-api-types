import type { MessageSizeEstimator } from '../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultMessageSizeEstimator extends Object implements MessageSizeEstimator {
    static DEFAULT: MessageSizeEstimator;
    constructor(arg0: number)
    // private handle: MessageSizeEstimator$Handle;
    newHandle(): MessageSizeEstimator$Handle;
}