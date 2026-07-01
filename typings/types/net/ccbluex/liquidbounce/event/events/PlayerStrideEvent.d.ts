import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires during stride-force adjustment, exposing the stride force.
 */
export class PlayerStrideEvent extends Event {
    constructor(strideForce: number)
    strideForce: number;
}