import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class PlayerUseMultiplier extends Event {
    constructor(forward: number, sideways: number)
    forward: number;
    sideways: number;
}