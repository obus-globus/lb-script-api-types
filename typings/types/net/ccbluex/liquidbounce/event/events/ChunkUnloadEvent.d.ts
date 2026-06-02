import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ChunkPos } from '../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ChunkUnloadEvent extends Event {
    constructor(pos: ChunkPos)
    readonly pos: ChunkPos;
}