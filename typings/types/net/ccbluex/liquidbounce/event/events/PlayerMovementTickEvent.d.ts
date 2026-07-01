import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires during the player's movement-tick phase, as movement is applied.
 */
export class PlayerMovementTickEvent extends Event {
    static INSTANCE: PlayerMovementTickEvent;
}