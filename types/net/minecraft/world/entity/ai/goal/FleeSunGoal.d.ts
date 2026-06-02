import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class FleeSunGoal extends Goal {
    constructor(mob: PathfinderMob, speedModifier: number)
    // private level: Level;
    // private mob: PathfinderMob;
    // private speedModifier: number;
    // private wantedX: number;
    // private wantedY: number;
    // private wantedZ: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getHidePos(): Vec3;
    setWantedPos(): boolean;
    start(): void;
}