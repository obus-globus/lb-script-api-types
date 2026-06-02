import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { PoiType } from '../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class VillagerMakeLove extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor()
    // private birthTimestamp: number;
    // private breed(level: ServerLevel, source: Villager, target: Villager): Optional<Villager>;
    // private canReach(body: Villager, poiPos: BlockPos, poiType: Holder<PoiType>): boolean;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private giveBedToChild(level: ServerLevel, child: Villager, bedPos: BlockPos): void;
    // private isBreedingPossible(myBody: Villager): boolean;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    // private takeVacantBed(level: ServerLevel, body: Villager): Optional<BlockPos>;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
    // private tryToGiveBirth(level: ServerLevel, body: Villager, target: Villager): void;
}