import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
export interface ChunkScanner$BlockChangeSubscriber extends Object{
    readonly debugName: string;
    /**
     * If this is true {@link recordBlock} is called on chunk updates and on single block updates.
     * This might be inefficient for some modules, so they can choose to not call that method on chunk updates.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt#L271 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt:271}
     */
    readonly shouldCallRecordBlockOnChunkUpdate: boolean;
    /**
     * Is called when a chunk is initially loaded or entirely updated.
     *
     * @param chunk a non-empty chunk
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt#L289 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt:289}
     */
    chunkUpdate(chunk: LevelChunk): void;
    clearAllChunks(): void;
    clearChunk(pos: ChunkPos): void;
    /**
     * Registers a block update and asks the subscriber to make a decision about what should be done.
     * This method must be **thread-safe**.
     *
     * @param pos Might be {@link BlockPos.MutableBlockPos}. Use copy if it needs to be saved.
     * @param state The new {@link BlockState} of {@link pos}.
     * @param cleared If the block is in section already cleared. Or, does it not need to check existing records
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt#L282 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/ChunkScanner.kt:282}
     */
    recordBlock(pos: BlockPos, state: BlockState, cleared: boolean): void;
}