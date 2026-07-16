import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerPingPacketListener } from '../../../../../net/minecraft/network/protocol/ping/ServerPingPacketListener.d.ts'
export class ServerboundPingRequestPacket extends Object implements Packet<ServerPingPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ServerboundPingRequestPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(time: number)
    readonly time: number;
    getTime(): number;
    handle(listener: ServerPingPacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundPingRequestPacket>;
    // private write(output: ByteBuf): void;
}