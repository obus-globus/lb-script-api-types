import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the player's movement multiplier while using an item is adjusted, exposing the forward and sideways factors.
 */
export class PlayerUseMultiplier extends Event {
    constructor(forward: number, sideways: number)
    forward: number;
    sideways: number;
}