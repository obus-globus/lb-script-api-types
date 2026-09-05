import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ReentrantReadWriteLock } from '../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Sequence } from '../../../../../kotlin/sequences/Sequence.d.ts'
import type { AbstractBlockLocationTracker } from '../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
/**
 * This base implementation stores multiple {@link BlockPos} for each state {@link T}.
 *
 * If one instance of {@link T} will be mapped from many {@link BlockPos},
 * for example, {@link T} is {@link Enum}, this base will consume less memory.
 *
 * @param T the generic should be stable for hash.
 * @see BlockPos2State
 * @see AbstractBlockLocationTracker
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:112}
 */
export abstract class AbstractBlockLocationTracker$State2BlockPos<T extends unknown> extends AbstractBlockLocationTracker<T> {
    constructor()
    // private lock: ReentrantReadWriteLock;
    // private stateAndPositions: JavaMap<T, (Object | null)[]>;
    allPositions(): Sequence<BlockPos>;
    clearAllChunks(): void;
    clearChunk(pos: ChunkPos): void;
    isEmpty(): boolean;
    iterate(): Sequence<Map$Entry<BlockPos, T>>;
    iterate(type: T): Sequence<BlockPos>;
    track(pos: BlockPos, state: T): void;
    untrack(pos: BlockPos): boolean;
}