import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockVelocityMultiplierEvent extends Event {
    constructor(block: Block, multiplier: number)
    readonly block: Block;
    multiplier: number;
}