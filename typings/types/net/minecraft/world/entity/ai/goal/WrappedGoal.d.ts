import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Goal$Flag } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal$Flag.d.ts'
export class WrappedGoal extends Goal {
    constructor(priority: number, goal: Goal)
    readonly goal: Goal;
    // private isRunning: boolean;
    readonly priority: number;
    adjustedTickDelay(ticks: number): number;
    canBeReplacedBy(goal: WrappedGoal): boolean;
    canContinueToUse(): boolean;
    canUse(): boolean;
    equals(o: Object | null): boolean;
    getFlags(): Goal$Flag[];
    getGoal(): Goal;
    getPriority(): number;
    hashCode(): number;
    isInterruptable(): boolean;
    isRunning(): boolean;
    requiresUpdateEveryTick(): boolean;
    setFlags(requiredControlFlags: Goal$Flag[]): void;
    start(): void;
    stop(): void;
    tick(): void;
}