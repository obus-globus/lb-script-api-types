import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Sequence } from '../../../../../kotlin/sequences/Sequence.d.ts'
import type { ChunkScanner$BlockChangeSubscriber } from '../../../../../net/ccbluex/liquidbounce/utils/block/ChunkScanner$BlockChangeSubscriber.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
/**
 * Tracks locations of specific states in the world.
 *
 * @param T state type
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:37}
 */
export class AbstractBlockLocationTracker<T extends Object | number | string | boolean> extends Object implements ChunkScanner$BlockChangeSubscriber {
    protected constructor()
    /**
     * Returns a {@link Sequence} providing all tracked {@link BlockPos}.
     *
     * Note: The elements of the {@link Sequence} is {@link BlockPos.MutableBlockPos}. Copy them if they will be maintained.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:63}
     */
    allPositions(): Sequence<BlockPos>;
    chunkUpdate(chunk: LevelChunk): void;
    /**
     * Gets the {@link state} of specified {@link BlockPos} and its {@link BlockState}.
     *
     * @returns null if {@link pos} should be untracked
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:44}
     */
    getStateFor(pos: BlockPos, state: BlockState): T | null;
    /**
     * Returns if there iss nothing tracked.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:77}
     */
    isEmpty(): boolean;
    /**
     * Returns a {@link Sequence} providing all tracked {@link BlockPos} and its state {@link T}.
     *
     * Note: The elements of the {@link Map.Entry.key} is {@link BlockPos.MutableBlockPos}. Copy them if they will be maintained.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:70}
     */
    iterate(): Sequence<Map$Entry<BlockPos, T>>;
    onUpdated(): void;
    recordBlock(pos: BlockPos, state: BlockState, cleared: boolean): void;
    /**
     * Tracks a {@link BlockPos} with {@link state}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:58}
     */
    track(pos: BlockPos, state: T): void;
    /**
     * Untracks a {@link BlockPos}.
     *
     * @returns true if the {@link pos} was tracked and now removed, false if the {@link pos} is untracked.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:51}
     */
    untrack(pos: BlockPos): boolean;
}