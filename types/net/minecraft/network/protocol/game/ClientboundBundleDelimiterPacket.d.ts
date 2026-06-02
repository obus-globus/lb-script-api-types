import type { BundleDelimiterPacket } from '../../../../../net/minecraft/network/protocol/BundleDelimiterPacket.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundBundleDelimiterPacket extends BundleDelimiterPacket<ClientGamePacketListener> {
    constructor()
    type(): PacketType<ClientboundBundleDelimiterPacket>;
}