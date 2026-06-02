import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerStepSuccessEvent extends Event {
    constructor(movementVec: Vec3, adjustedVec: Vec3)
    adjustedVec: Vec3;
    readonly movementVec: Vec3;
}