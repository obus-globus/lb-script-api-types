import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { WaterAvoidingRandomFlyingGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/WaterAvoidingRandomFlyingGoal.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Parrot$ParrotWanderGoal extends WaterAvoidingRandomFlyingGoal {
    static DEFAULT_INTERVAL: number;
    static PROBABILITY: number;
    constructor(mob: PathfinderMob, speedModifier: number)
    getPosition(): Vec3;
    // private getTreePos(): Vec3;
}