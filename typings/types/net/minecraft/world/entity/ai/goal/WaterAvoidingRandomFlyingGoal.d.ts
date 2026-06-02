import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { WaterAvoidingRandomStrollGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/WaterAvoidingRandomStrollGoal.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WaterAvoidingRandomFlyingGoal extends WaterAvoidingRandomStrollGoal {
    static DEFAULT_INTERVAL: number;
    static PROBABILITY: number;
    constructor(mob: PathfinderMob, speedModifier: number)
    getPosition(): Vec3;
}