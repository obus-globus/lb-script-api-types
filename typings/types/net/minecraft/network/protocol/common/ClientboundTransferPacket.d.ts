import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientCommonPacketListener } from '../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
export class ClientboundTransferPacket extends Record implements Packet<ClientCommonPacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundTransferPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    // private host: string;
    // private port: number;
    equals(o: Object | null): boolean;
    handle(listener: ClientCommonPacketListener): void;
    hashCode(): number;
    host(): string;
    isSkippable(): boolean;
    isTerminal(): boolean;
    port(): number;
    toString(): string;
    type(): PacketType<ClientboundTransferPacket>;
    // private write(output: FriendlyByteBuf): void;
}