import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { TargetingConditions } from '../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { TargetingConditions$Selector } from '../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
import type { EnderMan } from '../../../../../net/minecraft/world/entity/monster/EnderMan.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class EnderMan$EndermanLookForPlayerGoal extends NearestAttackableTargetGoal<Player> {
    constructor(enderman: EnderMan, isAngryAt: (param0: LivingEntity, param1: ServerLevel) => kotlin.Boolean)
    // private aggroTime: number;
    // private continueAggroTargetConditions: TargetingConditions;
    // private enderman: EnderMan;
    // private isAngerInducing: (param0: LivingEntity, param1: ServerLevel) => kotlin.Boolean;
    // private pendingTarget: Player;
    // private startAggroTargetConditions: TargetingConditions;
    // private teleportTime: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}