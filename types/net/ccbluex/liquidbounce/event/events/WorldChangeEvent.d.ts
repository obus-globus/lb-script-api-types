import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export class WorldChangeEvent extends Event {
    constructor(world: ClientLevel | null)
    readonly world: ClientLevel | null;
}