import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires once when the client has started.
 */
export class ClientStartEvent extends Event {
    static INSTANCE: ClientStartEvent;
}