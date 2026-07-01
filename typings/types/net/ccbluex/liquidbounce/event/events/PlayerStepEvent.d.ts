import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the player's auto-step height is calculated, exposing the step height.
 */
export class PlayerStepEvent extends Event {
    constructor(height: number)
    height: number;
}