import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires to determine whether safe-walk (ledge edge protection) is active.
 */
export class PlayerSafeWalkEvent extends Event {
    constructor(isSafeWalk: boolean)
    // private isSafeWalk: boolean;
    /*not mapped: */ isSafeWalk(): boolean;
}