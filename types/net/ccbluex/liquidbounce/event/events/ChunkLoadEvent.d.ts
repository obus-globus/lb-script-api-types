import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class ChunkLoadEvent extends Event {
    constructor(x: number, z: number)
    readonly x: number;
    readonly z: number;
}