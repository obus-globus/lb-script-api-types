import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the client is shutting down.
 */
export class ClientShutdownEvent extends Event {
    static INSTANCE: ClientShutdownEvent;
}