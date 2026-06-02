import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { DoorInteractGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/DoorInteractGoal.d.ts'
export class OpenDoorGoal extends DoorInteractGoal {
    constructor(mob: Mob, closeDoorAfter: boolean)
    // private closeDoor: boolean;
    // private forgetTime: number;
    canContinueToUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}