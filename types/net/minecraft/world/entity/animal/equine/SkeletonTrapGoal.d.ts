import type { DifficultyInstance } from '../../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractHorse } from '../../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
import type { SkeletonHorse } from '../../../../../../net/minecraft/world/entity/animal/equine/SkeletonHorse.d.ts'
import type { Skeleton } from '../../../../../../net/minecraft/world/entity/monster/skeleton/Skeleton.d.ts'
export class SkeletonTrapGoal extends Goal {
    constructor(horse: SkeletonHorse)
    // private horse: SkeletonHorse;
    canUse(): boolean;
    // private createHorse(difficulty: DifficultyInstance): AbstractHorse;
    // private createSkeleton(difficulty: DifficultyInstance, horse: AbstractHorse): Skeleton;
    // private enchant(skeleton: Skeleton, slot: EquipmentSlot, difficulty: DifficultyInstance): void;
    tick(): void;
}