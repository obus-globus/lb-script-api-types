import type { FollowParentGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/FollowParentGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxFollowParentGoal extends FollowParentGoal {
    static DONT_FOLLOW_IF_CLOSER_THAN: number;
    static HORIZONTAL_SCAN_RANGE: number;
    static VERTICAL_SCAN_RANGE: number;
    constructor(fox: Fox, speedModifier: number)
    // private fox: Fox;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
}