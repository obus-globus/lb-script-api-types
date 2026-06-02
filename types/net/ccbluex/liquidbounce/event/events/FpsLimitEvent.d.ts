import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class FpsLimitEvent extends Event {
    constructor(fps: number)
    fps: number;
}