import type { NearestAttackableTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class PolarBear$PolarBearAttackPlayersGoal extends NearestAttackableTargetGoal<Player> {
    constructor(null_: PolarBear$PolarBearAttackPlayersGoal)
    canUse(): boolean;
    getFollowDistance(): number;
}