import type { Bootstrap } from '../../../../io/netty/bootstrap/Bootstrap.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHealthChecker } from '../../../../io/netty/channel/pool/ChannelHealthChecker.d.ts'
import type { ChannelPoolHandler } from '../../../../io/netty/channel/pool/ChannelPoolHandler.d.ts'
import type { FixedChannelPool$AcquireTask } from '../../../../io/netty/channel/pool/FixedChannelPool$AcquireTask.d.ts'
import type { FixedChannelPool$AcquireTimeoutAction } from '../../../../io/netty/channel/pool/FixedChannelPool$AcquireTimeoutAction.d.ts'
import type { SimpleChannelPool } from '../../../../io/netty/channel/pool/SimpleChannelPool.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FixedChannelPool extends SimpleChannelPool {
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: ChannelHealthChecker, arg3: FixedChannelPool$AcquireTimeoutAction, arg4: number, arg5: number, arg6: number)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: ChannelHealthChecker, arg3: FixedChannelPool$AcquireTimeoutAction, arg4: number, arg5: number, arg6: number, arg7: boolean)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: ChannelHealthChecker, arg3: FixedChannelPool$AcquireTimeoutAction, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: boolean)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: number)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: number, arg3: number)
    // private acquireTimeoutNanos: number;
    // private acquiredChannelCount: AtomicInteger;
    // private closed: boolean;
    // private executor: (Object | null)[];
    // private maxConnections: number;
    // private maxPendingAcquires: number;
    // private pendingAcquireCount: number;
    // private pendingAcquireQueue: FixedChannelPool$AcquireTask[];
    // private timeoutTask: () => void;
    acquire(arg0: Promise<Channel>): Future<Channel>;
    // private acquire0(arg0: Promise<Channel>): void;
    acquiredChannelCount(): number;
    close(): void;
    // private close0(): Future<void>;
    closeAsync(): Future<void>;
    // private decrementAndRunTaskQueue(): void;
    release(arg0: Channel, arg1: Promise<void>): Future<void>;
    // private runTaskQueue(): void;
    // private tooManyOutstanding(arg0: Promise<Object>): void;
}