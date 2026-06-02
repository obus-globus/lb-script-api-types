import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { ShoulderRidingEntity } from '../../../../../../net/minecraft/world/entity/animal/parrot/ShoulderRidingEntity.d.ts'
export class LandOnOwnersShoulderGoal extends Goal {
    constructor(entity: ShoulderRidingEntity)
    // private entity: ShoulderRidingEntity;
    // private isSittingOnShoulder: boolean;
    canUse(): boolean;
    isInterruptable(): boolean;
    start(): void;
    tick(): void;
}