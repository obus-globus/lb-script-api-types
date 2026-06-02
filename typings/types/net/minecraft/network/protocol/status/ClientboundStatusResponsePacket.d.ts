import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientStatusPacketListener } from '../../../../../net/minecraft/network/protocol/status/ClientStatusPacketListener.d.ts'
import type { ServerStatus } from '../../../../../net/minecraft/network/protocol/status/ServerStatus.d.ts'
export class ClientboundStatusResponsePacket extends Record implements Packet<ClientStatusPacketListener> {
    static STREAM_CODEC: StreamCodec<ByteBuf, ClientboundStatusResponsePacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(status: ServerStatus)
    // private status: ServerStatus;
    equals(o: Object | null): boolean;
    handle(listener: ClientStatusPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    status(): ServerStatus;
    toString(): string;
    type(): PacketType<ClientboundStatusResponsePacket>;
}