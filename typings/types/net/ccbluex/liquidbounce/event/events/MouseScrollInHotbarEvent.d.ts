import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
/**
 * A mouse scroll routed to hotbar slot selection, exposing the scroll speed. Cancellable.
 */
export class MouseScrollInHotbarEvent extends CancellableEvent {
    constructor(speed: number)
    readonly speed: number;
}