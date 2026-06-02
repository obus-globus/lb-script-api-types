import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Cat } from '../../../../../../net/minecraft/world/entity/animal/feline/Cat.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class Cat$CatRelaxOnOwnerGoal extends Goal {
    constructor(cat: Cat)
    // private cat: Cat;
    // private goalPos: BlockPos;
    // private onBedTicks: number;
    // private ownerPlayer: Player;
    canContinueToUse(): boolean;
    canUse(): boolean;
    // private giveMorningGift(): void;
    // private spaceIsOccupied(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}