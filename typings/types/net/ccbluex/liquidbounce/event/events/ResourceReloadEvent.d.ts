import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when the game's resources have been reloaded.
 */
export class ResourceReloadEvent extends Event {
    static INSTANCE: ResourceReloadEvent;
}