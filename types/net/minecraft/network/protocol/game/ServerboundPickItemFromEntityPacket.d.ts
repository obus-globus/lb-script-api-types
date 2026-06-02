import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
export class ServerboundPickItemFromEntityPacket extends Record implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundPickItemFromEntityPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    // private id: number;
    // private includeData: boolean;
    equals(o: Object | null): boolean;
    handle(listener: ServerGamePacketListener): void;
    hashCode(): number;
    id(): number;
    includeData(): boolean;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ServerboundPickItemFromEntityPacket>;
}