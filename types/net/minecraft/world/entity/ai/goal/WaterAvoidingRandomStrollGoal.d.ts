import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { RandomStrollGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/RandomStrollGoal.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class WaterAvoidingRandomStrollGoal extends RandomStrollGoal {
    static DEFAULT_INTERVAL: number;
    static PROBABILITY: number;
    constructor(mob: PathfinderMob, speedModifier: number)
    constructor(mob: PathfinderMob, speedModifier: number, probability: number)
    // private probability: number;
    getPosition(): Vec3;
}