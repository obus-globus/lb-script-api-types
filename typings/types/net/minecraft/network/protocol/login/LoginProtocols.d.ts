import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ProtocolInfo } from '../../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { SimpleUnboundProtocol } from '../../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { ClientLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ClientLoginPacketListener.d.ts'
import type { ServerLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ServerLoginPacketListener.d.ts'
export class LoginProtocols extends Object {
    static CLIENTBOUND: ProtocolInfo<ClientLoginPacketListener>;
    static CLIENTBOUND_TEMPLATE: SimpleUnboundProtocol<ClientLoginPacketListener, FriendlyByteBuf>;
    static SERVERBOUND: ProtocolInfo<ServerLoginPacketListener>;
    static SERVERBOUND_TEMPLATE: SimpleUnboundProtocol<ServerLoginPacketListener, FriendlyByteBuf>;
    constructor()
}