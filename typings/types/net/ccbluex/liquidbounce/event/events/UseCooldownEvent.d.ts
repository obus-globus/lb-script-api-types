import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the item-use cooldown is updated, exposing the cooldown in ticks.
 */
export class UseCooldownEvent extends Event {
    constructor(cooldown: number)
    cooldown: number;
}