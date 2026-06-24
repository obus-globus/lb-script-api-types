import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BodyRotationControl } from '../../../../../net/minecraft/world/entity/ai/control/BodyRotationControl.d.ts'
import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
export class Phantom$PhantomBodyRotationControl extends BodyRotationControl {
    constructor(null_: Phantom, mob: Mob)
    clientTick(): void;
}