import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
import type { Bee$BaseBeeGoal } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee$BaseBeeGoal.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Bee$BeePollinateGoal extends Bee$BaseBeeGoal {
    constructor(null_: Bee)
    // private hoverPos: Vec3;
    // private lastSoundPlayedTick: number;
    // private pollinating: boolean;
    // private pollinatingTicks: number;
    // private successfulPollinatingTicks: number;
    // private unreachableFlowerCache: { [key: string]: any };
    canBeeContinueToUse(): boolean;
    canBeeUse(): boolean;
    // private findNearbyFlower(): Optional<BlockPos>;
    // private getOffset(): number;
    // private hasPollinatedLongEnough(): boolean;
    // private isPollinating(): boolean;
    requiresUpdateEveryTick(): boolean;
    // private setWantedPos(): void;
    start(): void;
    stop(): void;
    // private stopPollinating(): void;
    tick(): void;
}