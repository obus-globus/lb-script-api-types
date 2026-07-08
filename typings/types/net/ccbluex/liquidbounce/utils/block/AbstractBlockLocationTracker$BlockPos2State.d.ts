import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Sequence } from '../../../../../kotlin/sequences/Sequence.d.ts'
import type { AbstractBlockLocationTracker } from '../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
/**
 * This base implementation stores {@link BlockPos} and state {@link T} one by one.
 *
 * @see State2BlockPos
 * @see AbstractBlockLocationTracker
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L216 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:216}
 */
export abstract class AbstractBlockLocationTracker$BlockPos2State<T extends unknown> extends AbstractBlockLocationTracker<T> {
    constructor()
    // private positionAndState: Map<BlockPos, T>;
    allPositions(): Sequence<BlockPos>;
    clearAllChunks(): void;
    clearChunk(pos: ChunkPos): void;
    isEmpty(): boolean;
    iterate(): Sequence<Map$Entry<BlockPos, T>>;
    track(pos: BlockPos, state: T): void;
    untrack(pos: BlockPos): boolean;
}