import type { NearestAttackableTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class Bee$BeeBecomeAngryTargetGoal extends NearestAttackableTargetGoal<Player> {
    constructor(bee: Bee)
    // private beeCanTarget(): boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
}