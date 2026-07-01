import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * Fires to determine a block's slipperiness/friction multiplier (e.g. ice), exposing the block and the multiplier.
 */
export class BlockSlipperinessMultiplierEvent extends Event {
    constructor(block: Block, slipperiness: number)
    readonly block: Block;
    slipperiness: number;
}