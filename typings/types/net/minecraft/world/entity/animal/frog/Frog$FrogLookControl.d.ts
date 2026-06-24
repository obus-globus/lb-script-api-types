import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookControl } from '../../../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
import type { Frog } from '../../../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
export class Frog$FrogLookControl extends LookControl {
    constructor(null_: Frog, mob: Mob)
    resetXRotOnTick(): boolean;
}