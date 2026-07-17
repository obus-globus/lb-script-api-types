import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
export class ClientboundPlayerCombatEnterPacket extends Object implements Packet<ClientGamePacketListener> {
    static INSTANCE: ClientboundPlayerCombatEnterPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundPlayerCombatEnterPacket>;
    private constructor()
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundPlayerCombatEnterPacket>;
}