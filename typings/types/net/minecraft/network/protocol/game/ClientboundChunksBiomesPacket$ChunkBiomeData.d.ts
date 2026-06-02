import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export class ClientboundChunksBiomesPacket$ChunkBiomeData extends Record {
    static extractChunkData(parambuffer: FriendlyByteBuf, paramchunk: LevelChunk): void;
    // private buffer: number[];
    // private pos: ChunkPos;
    buffer(): number[];
    equals(o: Object | null): boolean;
    getReadBuffer(): FriendlyByteBuf;
    // private getWriteBuffer(): ByteBuf;
    hashCode(): number;
    pos(): ChunkPos;
    toString(): string;
    write(output: FriendlyByteBuf): void;
}