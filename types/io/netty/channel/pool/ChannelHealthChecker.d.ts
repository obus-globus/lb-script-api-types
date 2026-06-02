import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChannelHealthChecker extends Object{
    isHealthy(arg0: Channel): Future<boolean>;
}