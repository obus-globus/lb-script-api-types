import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the integrated browser is ready.
 */
export class BrowserReadyEvent extends Event {
    static INSTANCE: BrowserReadyEvent;
}