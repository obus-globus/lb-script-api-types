import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerLoginPacketListener } from '../../../../../net/minecraft/network/protocol/login/ServerLoginPacketListener.d.ts'
export class ServerboundLoginAcknowledgedPacket extends Object implements Packet<ServerLoginPacketListener> {
    static INSTANCE: ServerboundLoginAcknowledgedPacket;
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundLoginAcknowledgedPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    private constructor()
    handle(listener: ServerLoginPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundLoginAcknowledgedPacket>;
}