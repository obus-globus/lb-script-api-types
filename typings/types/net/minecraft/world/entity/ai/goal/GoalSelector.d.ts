import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Goal$Flag } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal$Flag.d.ts'
import type { WrappedGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/WrappedGoal.d.ts'
export class GoalSelector extends Object {
    constructor()
    readonly availableGoals: WrappedGoal[];
    // private disabledFlags: Goal$Flag[];
    // private lockedFlags: { [key in Goal$Flag]: WrappedGoal };
    addGoal(prio: number, goal: Goal): void;
    disableControlFlag(flag: Goal$Flag): void;
    enableControlFlag(flag: Goal$Flag): void;
    getAvailableGoals(): WrappedGoal[];
    removeAllGoals(predicate: (param0: Goal) => boolean): void;
    removeGoal(toRemove: Goal): void;
    setControlFlag(flag: Goal$Flag, enabled: boolean): void;
    tick(): void;
    tickRunningGoals(forceTickAllRunningGoals: boolean): void;
}