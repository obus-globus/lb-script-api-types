import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookControl } from '../../../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
export class Bee$BeeLookControl extends LookControl {
    constructor(null_: Bee$BeeLookControl, mob: Mob)
    resetXRotOnTick(): boolean;
    tick(): void;
}