import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ProtocolInfo } from '../../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { SimpleUnboundProtocol } from '../../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { ServerHandshakePacketListener } from '../../../../../net/minecraft/network/protocol/handshake/ServerHandshakePacketListener.d.ts'
export class HandshakeProtocols extends Object {
    static SERVERBOUND: ProtocolInfo<ServerHandshakePacketListener>;
    static SERVERBOUND_TEMPLATE: SimpleUnboundProtocol<ServerHandshakePacketListener, FriendlyByteBuf>;
    constructor()
}