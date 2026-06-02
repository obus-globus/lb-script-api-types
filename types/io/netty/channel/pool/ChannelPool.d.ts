import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChannelPool extends Closeable, Object{
    acquire(): Future<Channel>;
    acquire(arg0: Promise<Channel>): Future<Channel>;
    close(): void;
    release(arg0: Channel): Future<void>;
    release(arg0: Channel, arg1: Promise<void>): Future<void>;
}