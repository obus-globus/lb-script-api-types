import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Channel } from '../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ResourcePackHttpServer extends Object {
    constructor(arg0: InetSocketAddress)
    // private bindAddress: InetSocketAddress;
    // private channelFuture: ChannelFuture;
    // private connections: Map<UUID, UserConnection>;
    addConnection(arg0: UUID, arg1: UserConnection): void;
    getChannel(): Channel;
    getUrl(): string;
    stop(): void;
}