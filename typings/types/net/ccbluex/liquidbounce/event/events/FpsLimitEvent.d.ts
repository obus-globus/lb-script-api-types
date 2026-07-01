import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the frame-rate limit is applied, exposing the limit.
 */
export class FpsLimitEvent extends Event {
    constructor(fps: number)
    fps: number;
}