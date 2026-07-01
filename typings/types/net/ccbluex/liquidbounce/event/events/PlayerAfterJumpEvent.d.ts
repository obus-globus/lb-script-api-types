import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires immediately after a jump's motion has been applied.
 */
export class PlayerAfterJumpEvent extends Event {
    static INSTANCE: PlayerAfterJumpEvent;
}