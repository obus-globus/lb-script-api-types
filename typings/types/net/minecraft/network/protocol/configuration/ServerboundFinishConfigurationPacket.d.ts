import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ServerConfigurationPacketListener.d.ts'
export class ServerboundFinishConfigurationPacket extends Object implements Packet<ServerConfigurationPacketListener> {
    static INSTANCE: ServerboundFinishConfigurationPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundFinishConfigurationPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    private constructor()
    handle(listener: ServerConfigurationPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundFinishConfigurationPacket>;
}