import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
/**
 * Fires when the client world is loaded or unloaded; the world is null when leaving a world.
 */
export class WorldChangeEvent extends Event {
    constructor(world: ClientLevel | null)
    readonly world: ClientLevel | null;
}