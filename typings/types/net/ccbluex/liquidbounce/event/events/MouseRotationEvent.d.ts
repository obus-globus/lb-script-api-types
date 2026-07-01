import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
/**
 * Camera rotation derived from raw mouse-movement deltas. Cancellable - cancelling suppresses the look rotation.
 */
export class MouseRotationEvent extends CancellableEvent {
    constructor(cursorDeltaX: number, cursorDeltaY: number)
    cursorDeltaX: number;
    cursorDeltaY: number;
}