import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires on every client game tick.
 */
export class GameTickEvent extends Event {
    static INSTANCE: GameTickEvent;
}