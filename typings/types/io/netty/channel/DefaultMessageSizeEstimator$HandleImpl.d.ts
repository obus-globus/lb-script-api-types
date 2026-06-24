import type { DefaultMessageSizeEstimator$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { MessageSizeEstimator$Handle } from '../../../io/netty/channel/MessageSizeEstimator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultMessageSizeEstimator$HandleImpl extends Object implements MessageSizeEstimator$Handle {
    private constructor(arg0: number)
    constructor(arg0: number, arg1: DefaultMessageSizeEstimator$1)
    // private unknownSize: number;
    size(arg0: Object): number;
}