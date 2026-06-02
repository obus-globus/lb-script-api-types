import type { FixedChannelPool$AcquireTask } from '../../../../io/netty/channel/pool/FixedChannelPool$AcquireTask.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class FixedChannelPool$TimeoutTask extends Object implements Runnable {
    private constructor(null_: FixedChannelPool$TimeoutTask)
    onTimeout(arg0: FixedChannelPool$AcquireTask): void;
    run(): void;
}