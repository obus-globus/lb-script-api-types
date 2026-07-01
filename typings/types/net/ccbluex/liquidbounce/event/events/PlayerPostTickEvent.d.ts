import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires each client player tick, after movement has been processed.
 */
export class PlayerPostTickEvent extends Event {
    static INSTANCE: PlayerPostTickEvent;
}