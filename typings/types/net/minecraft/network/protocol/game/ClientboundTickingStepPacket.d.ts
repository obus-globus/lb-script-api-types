import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { TickRateManager } from '../../../../../net/minecraft/world/TickRateManager.d.ts'
export class ClientboundTickingStepPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundTickingStepPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    static from(parammanager: TickRateManager): ClientboundTickingStepPacket;
    constructor(tickSteps: number)
    // private tickSteps: number;
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    tickSteps(): number;
    toString(): string;
    type(): PacketType<ClientboundTickingStepPacket>;
    // private write(output: FriendlyByteBuf): void;
}