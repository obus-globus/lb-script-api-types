import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Difficulty } from '../../../../../../net/minecraft/world/Difficulty.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { DoorInteractGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/DoorInteractGoal.d.ts'
export class BreakDoorGoal extends DoorInteractGoal {
    constructor(mob: Mob, validDifficulties: (param0: Difficulty) => kotlin.Boolean)
    constructor(mob: Mob, seconds: number, validDifficulties: (param0: Difficulty) => kotlin.Boolean)
    // private breakTime: number;
    // private doorBreakTime: number;
    // private lastBreakProgress: number;
    // private validDifficulties: (param0: Difficulty) => kotlin.Boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getDoorBreakTime(): number;
    // private isValidDifficulty(difficulty: Difficulty): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}