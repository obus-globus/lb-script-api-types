import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
export class ServerConnectionListener extends Object {
    constructor(server: MinecraftServer)
    // private channels: ChannelFuture[];
    readonly connections: Connection[];
    running: boolean;
    readonly server: MinecraftServer;
    readonly sessionId: UUID;
    acceptChannel(channel: Channel, profileId: UUID): void;
    getConnections(): Connection[];
    getServer(): MinecraftServer;
    getSessionId(): UUID;
    startMemoryChannel(): SocketAddress;
    startTcpServerListener(address: InetAddress, port: number): void;
    stop(): void;
    stopTcpServerListener(): void;
    tick(): void;
}