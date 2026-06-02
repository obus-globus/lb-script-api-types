import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
export class MouseRotationEvent extends CancellableEvent {
    constructor(cursorDeltaX: number, cursorDeltaY: number)
    cursorDeltaX: number;
    cursorDeltaY: number;
}