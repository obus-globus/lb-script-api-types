import type { FleeSunGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/FleeSunGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$SeekShelterGoal extends FleeSunGoal {
    constructor(null_: Fox, speedModifier: number)
    // private interval: number;
    canUse(): boolean;
    start(): void;
}