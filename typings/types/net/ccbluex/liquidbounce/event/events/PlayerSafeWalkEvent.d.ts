import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class PlayerSafeWalkEvent extends Event {
    constructor(isSafeWalk: boolean)
    // private isSafeWalk: boolean;
    /*not mapped: */ isSafeWalk(): boolean;
}