import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractCubeMob } from '../../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob.d.ts'
export class AbstractCubeMob$CubeMobRandomDirectionGoal extends Goal {
    constructor(cubeMob: AbstractCubeMob)
    // private chosenDegrees: number;
    // private cubeMob: AbstractCubeMob;
    // private nextRandomizeTime: number;
    canUse(): boolean;
    tick(): void;
}