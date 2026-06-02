import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BodyRotationControl } from '../../../../../net/minecraft/world/entity/ai/control/BodyRotationControl.d.ts'
export class Shulker$ShulkerBodyRotationControl extends BodyRotationControl {
    constructor(mob: Mob)
    clientTick(): void;
}