import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class AllowAutoJumpEvent extends Event {
    constructor(isAllowed: boolean)
    // private isAllowed: boolean;
    /*not mapped: */ isAllowed(): boolean;
}