import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { ChunkScanner$BlockChangeSubscriber } from '../../../../../../net/ccbluex/liquidbounce/utils/block/ChunkScanner$BlockChangeSubscriber.d.ts'
import type { Hole } from '../../../../../../net/ccbluex/liquidbounce/utils/block/hole/Hole.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { BoundingBox } from '../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class HoleTracker extends Object implements MinecraftShortcuts, ChunkScanner$BlockChangeSubscriber {
    static INSTANCE: HoleTracker;
    // private BLAST_RESISTANT_BLOCKS: Block[];
    // private /*not mapped: */ getBLAST_RESISTANT_BLOCKS(): Block[];
    // private INDESTRUCTIBLE_BLOCKS: Block[];
    // private /*not mapped: */ getINDESTRUCTIBLE_BLOCKS(): Block[];
    readonly holes: Hole[];
    // private mutable: BlockPos$MutableBlockPos;
    // private /*not mapped: */ getMutable(): BlockPos$MutableBlockPos;
    readonly shouldCallRecordBlockOnChunkUpdate: boolean;
    chunkUpdate(chunk: LevelChunk): void;
    clearAllChunks(): void;
    clearChunk(pos: ChunkPos): void;
    // private invalidate(region: BoundingBox): void;
    recordBlock(pos: BlockPos, state: BlockState, cleared: boolean): void;
}