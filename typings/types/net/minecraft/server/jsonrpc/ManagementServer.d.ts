import type { HostAndPort } from '../../../../com/google/common/net/HostAndPort.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { ScheduledFuture } from '../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../net/minecraft/server/jsonrpc/Connection.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { AuthenticationHandler } from '../../../../net/minecraft/server/jsonrpc/security/AuthenticationHandler.d.ts'
import type { NotificationManager } from '../../../../net/minecraft/server/notifications/NotificationManager.d.ts'
export class ManagementServer extends Object {
    constructor(hostAndPort: HostAndPort, authenticationHandler: AuthenticationHandler)
    constructor(hostAndPort: HostAndPort, authenticationHandler: AuthenticationHandler, eventLoopGroup: (Object | null)[])
    // private authenticationHandler: AuthenticationHandler;
    // private connections: Connection[];
    // private eventLoopGroup: (Object | null)[];
    // private heartbeat: ScheduledFuture<Object>;
    // private hostAndPort: HostAndPort;
    // private serverChannel: Channel;
    forEachConnection(action: (param0: Connection) => void): void;
    getPort(): number;
    onConnected(connection: Connection): void;
    onDisconnected(connection: Connection): void;
    scheduleHeartbeat(notificationManager: NotificationManager, period: number): boolean;
    // private start(minecraftApi: MinecraftApi, sslContext: SslContext): void;
    startWithTls(minecraftApi: MinecraftApi, sslContext: SslContext): void;
    startWithoutTls(minecraftApi: MinecraftApi): void;
    stop(closeNioEventLoopGroup: boolean): void;
    tick(): void;
}