import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ProtocolInfo } from '../../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { SimpleUnboundProtocol } from '../../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
import type { ServerConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ServerConfigurationPacketListener.d.ts'
export class ConfigurationProtocols extends Object {
    static CLIENTBOUND: ProtocolInfo<ClientConfigurationPacketListener>;
    static CLIENTBOUND_TEMPLATE: SimpleUnboundProtocol<ClientConfigurationPacketListener, FriendlyByteBuf>;
    static SERVERBOUND: ProtocolInfo<ServerConfigurationPacketListener>;
    static SERVERBOUND_TEMPLATE: SimpleUnboundProtocol<ServerConfigurationPacketListener, FriendlyByteBuf>;
    constructor()
}