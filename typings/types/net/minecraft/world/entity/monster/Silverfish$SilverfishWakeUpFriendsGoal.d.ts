import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Silverfish } from '../../../../../net/minecraft/world/entity/monster/Silverfish.d.ts'
export class Silverfish$SilverfishWakeUpFriendsGoal extends Goal {
    constructor(silverfish: Silverfish)
    // private lookForFriends: number;
    // private silverfish: Silverfish;
    canUse(): boolean;
    notifyHurt(): void;
    tick(): void;
}