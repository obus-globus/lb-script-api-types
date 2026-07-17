import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientPongPacketListener } from '../../../../../net/minecraft/network/protocol/ping/ClientPongPacketListener.d.ts'
export class ClientboundPongResponsePacket extends Record implements Packet<ClientPongPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundPongResponsePacket>;
    constructor(time: number)
    // private time: number;
    equals(o: Object | null): boolean;
    handle(listener: ClientPongPacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    time(): number;
    toString(): string;
    type(): PacketType<ClientboundPongResponsePacket>;
    // private write(output: FriendlyByteBuf): void;
}