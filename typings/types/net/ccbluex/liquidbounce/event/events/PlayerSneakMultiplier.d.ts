import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the player's sneak movement multiplier is adjusted, exposing the multiplier.
 */
export class PlayerSneakMultiplier extends Event {
    constructor(multiplier: number)
    multiplier: number;
}