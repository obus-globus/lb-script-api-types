import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the player's rotation is updated.
 */
export class RotationUpdateEvent extends Event {
    static INSTANCE: RotationUpdateEvent;
}