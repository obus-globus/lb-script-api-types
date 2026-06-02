import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Slime } from '../../../../../net/minecraft/world/entity/monster/Slime.d.ts'
export class Slime$SlimeRandomDirectionGoal extends Goal {
    constructor(slime: Slime)
    // private chosenDegrees: number;
    // private nextRandomizeTime: number;
    // private slime: Slime;
    canUse(): boolean;
    tick(): void;
}