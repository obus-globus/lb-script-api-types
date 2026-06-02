import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { CodecModifier } from '../../../../../net/minecraft/network/protocol/CodecModifier.d.ts'
import type { SimpleUnboundProtocol } from '../../../../../net/minecraft/network/protocol/SimpleUnboundProtocol.d.ts'
import type { UnboundProtocol } from '../../../../../net/minecraft/network/protocol/UnboundProtocol.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { GameProtocols$Context } from '../../../../../net/minecraft/network/protocol/game/GameProtocols$Context.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { ServerboundSetCreativeModeSlotPacket } from '../../../../../net/minecraft/network/protocol/game/ServerboundSetCreativeModeSlotPacket.d.ts'
export class GameProtocols extends Object {
    static CLIENTBOUND_TEMPLATE: SimpleUnboundProtocol<ClientGamePacketListener, RegistryFriendlyByteBuf>;
    static HAS_INFINITE_MATERIALS: (param0: RegistryFriendlyByteBuf, param1: ServerboundSetCreativeModeSlotPacket) => GameProtocols$Context;
    static SERVERBOUND_TEMPLATE: UnboundProtocol<ServerGamePacketListener, RegistryFriendlyByteBuf, GameProtocols$Context>;
    constructor()
}