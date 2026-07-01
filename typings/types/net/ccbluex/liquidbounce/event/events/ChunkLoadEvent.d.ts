import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when a chunk is loaded, exposing its chunk coordinates.
 */
export class ChunkLoadEvent extends Event {
    constructor(x: number, z: number)
    readonly x: number;
    readonly z: number;
}