import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ClientConfigurationPacketListener.d.ts'
export class ClientboundFinishConfigurationPacket extends Object implements Packet<ClientConfigurationPacketListener> {
    static INSTANCE: ClientboundFinishConfigurationPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundFinishConfigurationPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    private constructor()
    handle(listener: ClientConfigurationPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundFinishConfigurationPacket>;
}