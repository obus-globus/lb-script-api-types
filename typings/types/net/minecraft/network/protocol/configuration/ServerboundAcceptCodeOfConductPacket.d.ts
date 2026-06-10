import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerConfigurationPacketListener } from '../../../../../net/minecraft/network/protocol/configuration/ServerConfigurationPacketListener.d.ts'
export class ServerboundAcceptCodeOfConductPacket extends Record implements Packet<ServerConfigurationPacketListener> {
    static INSTANCE: ServerboundAcceptCodeOfConductPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundAcceptCodeOfConductPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor()
    equals(o: Object | null): boolean;
    handle(listener: ServerConfigurationPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ServerboundAcceptCodeOfConductPacket>;
}