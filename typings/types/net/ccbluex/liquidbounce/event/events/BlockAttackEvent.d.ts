import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Fires when the player starts breaking a block, exposing its position. Cancellable.
 */
export class BlockAttackEvent extends CancellableEvent {
    constructor(pos: BlockPos)
    readonly pos: BlockPos;
}