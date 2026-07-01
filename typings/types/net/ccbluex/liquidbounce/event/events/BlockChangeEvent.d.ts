import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Fires when a block changes, exposing the position and the new block state.
 */
export class BlockChangeEvent extends Event {
    constructor(blockPos: BlockPos, newState: BlockState)
    readonly blockPos: BlockPos;
    readonly newState: BlockState;
}