import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ProtocolInfo } from '../../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { SimpleUnboundProtocol } from '../../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { ClientStatusPacketListener } from '../../../../../net/minecraft/network/protocol/status/ClientStatusPacketListener.d.ts'
import type { ServerStatusPacketListener } from '../../../../../net/minecraft/network/protocol/status/ServerStatusPacketListener.d.ts'
export class StatusProtocols extends Object {
    static CLIENTBOUND: ProtocolInfo<ClientStatusPacketListener>;
    static CLIENTBOUND_TEMPLATE: SimpleUnboundProtocol<ClientStatusPacketListener, FriendlyByteBuf>;
    static SERVERBOUND: ProtocolInfo<ServerStatusPacketListener>;
    static SERVERBOUND_TEMPLATE: SimpleUnboundProtocol<ServerStatusPacketListener, ByteBuf>;
    constructor()
}