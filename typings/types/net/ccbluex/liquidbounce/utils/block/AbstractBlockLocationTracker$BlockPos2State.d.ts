import type { JavaMap } from '../../../../../JavaMap.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt#L216 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker.kt:216}
 */
export abstract class AbstractBlockLocationTracker$BlockPos2State<T extends unknown> extends AbstractBlockLocationTracker<T> {
    constructor()
    // private positionAndState: JavaMap<BlockPos, T>;
    allPositions(): Sequence<BlockPos>;
    clearAllChunks(): void;
    clearChunk(pos: ChunkPos): void;
    isEmpty(): boolean;
    iterate(): Sequence<Map$Entry<BlockPos, T>>;
    track(pos: BlockPos, state: T): void;
    untrack(pos: BlockPos): boolean;
}