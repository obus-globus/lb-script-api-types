import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
import type { Phantom$PhantomMoveTargetGoal } from '../../../../../net/minecraft/world/entity/monster/Phantom$PhantomMoveTargetGoal.d.ts'
export class Phantom$PhantomSweepAttackGoal extends Phantom$PhantomMoveTargetGoal {
    private constructor(null_: Phantom)
    // private catSearchTick: number;
    // private isScaredOfCat: boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    stop(): void;
    tick(): void;
}