import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
export class PlayerJumpEvent extends CancellableEvent {
    constructor(motion: number, yaw: number)
    motion: number;
    yaw: number;
}