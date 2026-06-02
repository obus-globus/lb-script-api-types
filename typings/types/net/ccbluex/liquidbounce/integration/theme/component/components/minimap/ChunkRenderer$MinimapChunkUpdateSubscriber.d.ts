import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkScanner$BlockChangeSubscriber } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/ChunkScanner$BlockChangeSubscriber.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { Vector2i } from '../../../../../../../../org/joml/Vector2i.d.ts'
export class ChunkRenderer$MinimapChunkUpdateSubscriber extends Object implements ChunkScanner$BlockChangeSubscriber {
    static INSTANCE: ChunkRenderer$MinimapChunkUpdateSubscriber;
    // private AIR_COLOR: number;
    // private borderOffsets: Vector2i[];
    // private offsetsToCheck: Vector2i[];
    readonly shouldCallRecordBlockOnChunkUpdate: boolean;
    chunkUpdate(chunk: LevelChunk): void;
    clearAllChunks(): void;
    clearChunk(pos: ChunkPos): void;
    // private getColor(x: number, z: number): number;
    recordBlock(pos: BlockPos, state: BlockState, cleared: boolean): void;
}