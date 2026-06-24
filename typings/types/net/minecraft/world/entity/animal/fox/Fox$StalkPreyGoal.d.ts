import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$StalkPreyGoal extends Goal {
    constructor(null_: Fox)
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}