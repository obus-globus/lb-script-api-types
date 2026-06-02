import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
export class MouseScrollInHotbarEvent extends CancellableEvent {
    constructor(speed: number)
    readonly speed: number;
}