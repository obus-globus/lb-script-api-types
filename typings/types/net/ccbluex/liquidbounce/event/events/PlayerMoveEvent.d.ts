import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { MoverType } from '../../../../../net/minecraft/world/entity/MoverType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerMoveEvent extends Event {
    constructor(type: MoverType, movement: Vec3)
    movement: Vec3;
    readonly type: MoverType;
}