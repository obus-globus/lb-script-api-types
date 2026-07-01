import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
/**
 * Fires when the player initiates a jump, exposing the (mutable) jump motion and yaw. Cancellable - cancelling prevents the jump.
 */
export class PlayerJumpEvent extends CancellableEvent {
    constructor(motion: number, yaw: number)
    motion: number;
    yaw: number;
}