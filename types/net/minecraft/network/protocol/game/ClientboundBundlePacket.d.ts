import type { BundlePacket } from '../../../../../net/minecraft/network/protocol/BundlePacket.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundBundlePacket extends BundlePacket<ClientGamePacketListener> {
    constructor(packets: Packet<ClientGamePacketListener>[])
    handle(listener: ClientGamePacketListener): void;
    type(): PacketType<ClientboundBundlePacket>;
}