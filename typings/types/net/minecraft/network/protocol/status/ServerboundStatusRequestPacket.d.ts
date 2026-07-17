import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerStatusPacketListener } from '../../../../../net/minecraft/network/protocol/status/ServerStatusPacketListener.d.ts'
export class ServerboundStatusRequestPacket extends Object implements Packet<ServerStatusPacketListener> {
    static INSTANCE: ServerboundStatusRequestPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundStatusRequestPacket>;
    private constructor()
    handle(listener: ServerStatusPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundStatusRequestPacket>;
}