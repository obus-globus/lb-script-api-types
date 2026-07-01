import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires to determine whether auto-jump is allowed, exposing the current flag.
 */
export class AllowAutoJumpEvent extends Event {
    constructor(isAllowed: boolean)
    // private isAllowed: boolean;
    /*not mapped: */ isAllowed(): boolean;
}