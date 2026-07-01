import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires during the packet-processing phase of the client tick.
 */
export class TickPacketProcessEvent extends Event {
    static INSTANCE: TickPacketProcessEvent;
}