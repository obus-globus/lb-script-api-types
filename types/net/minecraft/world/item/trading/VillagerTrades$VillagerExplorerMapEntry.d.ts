import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { VillagerType } from '../../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
import type { VillagerTrade } from '../../../../../net/minecraft/world/item/trading/VillagerTrade.d.ts'
import type { Structure } from '../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { MapDecorationType } from '../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
export class VillagerTrades$VillagerExplorerMapEntry extends Record {
    private constructor(resourceKey: ResourceKey<VillagerTrade>, structureTagKey: TagKey<Structure>, mapDecorationType: Holder<MapDecorationType>, translationKey: string, villagerTypes: ResourceKey<VillagerType>[])
    // private mapDecorationType: Holder<MapDecorationType>;
    // private resourceKey: ResourceKey<VillagerTrade>;
    // private structureTagKey: TagKey<Structure>;
    // private translationKey: string;
    // private villagerTypes: ResourceKey<VillagerType>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    mapDecorationType(): Holder<MapDecorationType>;
    resourceKey(): ResourceKey<VillagerTrade>;
    structureTagKey(): TagKey<Structure>;
    toString(): string;
    translationKey(): string;
    villagerTypes(): ResourceKey<VillagerType>[];
}