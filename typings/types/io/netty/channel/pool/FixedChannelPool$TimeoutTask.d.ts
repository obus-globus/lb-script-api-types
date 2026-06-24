import type { FixedChannelPool$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { FixedChannelPool } from '../../../../io/netty/channel/pool/FixedChannelPool.d.ts'
import type { FixedChannelPool$AcquireTask } from '../../../../io/netty/channel/pool/FixedChannelPool$AcquireTask.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FixedChannelPool$TimeoutTask extends Object implements Runnable {
    private constructor(null_: FixedChannelPool)
    constructor(null_: FixedChannelPool, arg1: FixedChannelPool$1)
    onTimeout(arg0: FixedChannelPool$AcquireTask): void;
    run(): void;
}