import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Dolphin } from '../../../../../../net/minecraft/world/entity/animal/dolphin/Dolphin.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class Dolphin$DolphinSwimWithPlayerGoal extends Goal {
    constructor(dolphin: Dolphin, speedModifier: number)
    // private dolphin: Dolphin;
    // private player: Player;
    // private speedModifier: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}