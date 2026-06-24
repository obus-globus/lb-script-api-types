import type { HashedWheelTimer$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { HashedWheelTimer$HashedWheelTimeout } from '../../../io/netty/util/HashedWheelTimer$HashedWheelTimeout.d.ts'
import type { Timeout } from '../../../io/netty/util/Timeout.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HashedWheelTimer$HashedWheelBucket extends Object {
    private constructor()
    constructor(arg0: HashedWheelTimer$1)
    // private head: HashedWheelTimer$HashedWheelTimeout;
    // private tail: HashedWheelTimer$HashedWheelTimeout;
    addTimeout(arg0: HashedWheelTimer$HashedWheelTimeout): void;
    clearTimeouts(arg0: Timeout[]): void;
    expireTimeouts(arg0: number): void;
    // private pollTimeout(): HashedWheelTimer$HashedWheelTimeout;
    remove(arg0: HashedWheelTimer$HashedWheelTimeout): HashedWheelTimer$HashedWheelTimeout;
}