import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class PlayerSneakMultiplier extends Event {
    constructor(multiplier: number)
    multiplier: number;
}