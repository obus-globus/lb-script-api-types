import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ClientboundChunksBiomesPacket$ChunkBiomeData } from '../../../../../net/minecraft/network/protocol/game/ClientboundChunksBiomesPacket$ChunkBiomeData.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ClientboundChunksBiomesPacket extends Record implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundChunksBiomesPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static forChunks(paramchunks: LevelChunk[]): ClientboundChunksBiomesPacket;
    constructor(chunkBiomeData: ClientboundChunksBiomesPacket$ChunkBiomeData[])
    private constructor(input: FriendlyByteBuf)
    // private chunkBiomeData: ClientboundChunksBiomesPacket$ChunkBiomeData[];
    chunkBiomeData(): ClientboundChunksBiomesPacket$ChunkBiomeData[];
    equals(o: Object | null): boolean;
    handle(listener: ClientGamePacketListener): void;
    hashCode(): number;
    isSkippable(): boolean;
    isTerminal(): boolean;
    toString(): string;
    type(): PacketType<ClientboundChunksBiomesPacket>;
    // private write(output: FriendlyByteBuf): void;
}