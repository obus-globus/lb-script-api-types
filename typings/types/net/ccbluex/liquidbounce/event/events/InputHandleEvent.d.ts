import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires while the client's input is handled each tick.
 */
export class InputHandleEvent extends Event {
    static INSTANCE: InputHandleEvent;
}