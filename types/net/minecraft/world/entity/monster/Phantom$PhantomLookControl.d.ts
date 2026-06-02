import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { LookControl } from '../../../../../net/minecraft/world/entity/ai/control/LookControl.d.ts'
export class Phantom$PhantomLookControl extends LookControl {
    constructor(mob: Mob)
    tick(): void;
}