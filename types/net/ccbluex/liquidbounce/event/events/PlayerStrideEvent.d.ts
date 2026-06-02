import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class PlayerStrideEvent extends Event {
    constructor(strideForce: number)
    strideForce: number;
}