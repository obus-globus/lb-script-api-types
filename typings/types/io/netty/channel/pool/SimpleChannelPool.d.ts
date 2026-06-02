import type { Bootstrap } from '../../../../io/netty/bootstrap/Bootstrap.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHealthChecker } from '../../../../io/netty/channel/pool/ChannelHealthChecker.d.ts'
import type { ChannelPool } from '../../../../io/netty/channel/pool/ChannelPool.d.ts'
import type { ChannelPoolHandler } from '../../../../io/netty/channel/pool/ChannelPoolHandler.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SimpleChannelPool extends Object implements ChannelPool {
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: ChannelHealthChecker)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: ChannelHealthChecker, arg3: boolean)
    constructor(arg0: Bootstrap, arg1: ChannelPoolHandler, arg2: ChannelHealthChecker, arg3: boolean, arg4: boolean)
    // private bootstrap: Bootstrap;
    // private deque: Channel[];
    // private handler: ChannelPoolHandler;
    // private healthCheck: ChannelHealthChecker;
    // private lastRecentUsed: boolean;
    // private releaseHealthCheck: boolean;
    acquire(): Future<Channel>;
    acquire(arg0: Promise<Channel>): Future<Channel>;
    // private acquireHealthyFromPoolOrNew(arg0: Promise<Channel>): Future<Channel>;
    bootstrap(): Bootstrap;
    close(): void;
    // private closeAndFail(arg0: Channel, arg1: Throwable, arg2: Promise<Object>): void;
    closeAsync(): Future<void>;
    // private closeChannel(arg0: Channel): void;
    connectChannel(arg0: Bootstrap): ChannelFuture;
    // private doHealthCheck(arg0: Channel, arg1: Promise<Channel>): void;
    // private doHealthCheckOnRelease(arg0: Channel, arg1: Promise<void>): void;
    // private doReleaseChannel(arg0: Channel, arg1: Promise<void>): void;
    handler(): ChannelPoolHandler;
    healthChecker(): ChannelHealthChecker;
    // private notifyConnect(arg0: ChannelFuture, arg1: Promise<Channel>): void;
    // private notifyHealthCheck(arg0: Future<boolean>, arg1: Channel, arg2: Promise<Channel>): void;
    offerChannel(arg0: Channel): boolean;
    pollChannel(): Channel;
    release(arg0: Channel): Future<void>;
    release(arg0: Channel, arg1: Promise<void>): Future<void>;
    // private releaseAndOffer(arg0: Channel, arg1: Promise<void>): void;
    // private releaseAndOfferIfHealthy(arg0: Channel, arg1: Promise<void>, arg2: Future<boolean>): void;
    releaseHealthCheck(): boolean;
}