import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
import type { Zombie } from '../../../../../../net/minecraft/world/entity/monster/zombie/Zombie.d.ts'
export class ZombieAttackGoal extends MeleeAttackGoal {
    constructor(zombie: Zombie, speedModifier: number, trackTarget: boolean)
    // private raiseArmTicks: number;
    // private zombie: Zombie;
    start(): void;
    stop(): void;
    tick(): void;
}