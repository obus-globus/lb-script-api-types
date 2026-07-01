import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires at the start of the main render frame.
 */
export class GameRenderEvent extends Event {
    static INSTANCE: GameRenderEvent;
}