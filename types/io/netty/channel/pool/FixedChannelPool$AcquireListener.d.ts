import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { FutureListener } from '../../../../io/netty/util/concurrent/FutureListener.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FixedChannelPool$AcquireListener extends Object implements FutureListener<Channel> {
    constructor(null_: FixedChannelPool$AcquireListener)
    // private acquired: boolean;
    // private originalPromise: Promise<Channel>;
    acquired(): void;
    operationComplete(arg0: Future<Channel>): void;
}