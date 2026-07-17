import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
export class ClientboundFinishConfigurationPacket extends Object implements Packet<ClientConfigurationPacketListener> {
    static INSTANCE: ClientboundFinishConfigurationPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundFinishConfigurationPacket>;
    private constructor()
    handle(listener: ClientConfigurationPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundFinishConfigurationPacket>;
}