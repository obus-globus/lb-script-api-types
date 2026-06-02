import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class BlockBreakingProgressEvent extends Event {
    constructor(pos: BlockPos)
    readonly pos: BlockPos;
}