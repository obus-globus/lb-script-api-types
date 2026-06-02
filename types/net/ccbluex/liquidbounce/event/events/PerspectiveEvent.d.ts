import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { CameraType } from '../../../../../net/minecraft/client/CameraType.d.ts'
export class PerspectiveEvent extends Event {
    constructor(perspective: CameraType)
    perspective: CameraType;
}