import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { GiveGiftToHeroAccessor } from '../../../../../../net/fabricmc/fabric/mixin/content/registry/GiveGiftToHeroAccessor.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { VillagerProfession } from '../../../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class GiveGiftToHero extends Behavior<Villager> implements GiveGiftToHeroAccessor {
    static DEFAULT_DURATION: number;
    static fabric_getGifts(): Map<ResourceKey<VillagerProfession>, ResourceKey<LootTable>>;
    constructor(timeout: number)
    // private giftGivenDuringThisRun: boolean;
    // private timeSinceStart: number;
    // private timeUntilNextGift: number;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private getNearestTargetableHero(body: Villager): Optional<Player>;
    // private isHero(player: Player): boolean;
    // private isHeroVisible(body: Villager): boolean;
    // private isWithinThrowingDistance(villager: Villager, player: Player): boolean;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    // private throwGift(level: ServerLevel, villager: Villager, target: LivingEntity): void;
    tick(level: ServerLevel, villager: Villager, timestamp: number): void;
}