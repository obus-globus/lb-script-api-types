import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { VillagerType } from '../../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { VillagerTrade } from '../../../../../net/minecraft/world/item/trading/VillagerTrade.d.ts'
export class TradeRebalanceVillagerTrades$BookTradeDefinition extends Record {
    // private enchantment: ResourceKey<Enchantment>;
    // private level: number;
    // private resourceKey: ResourceKey<VillagerTrade>;
    // private villagerType: ResourceKey<VillagerType>;
    enchantment(): ResourceKey<Enchantment>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): number;
    resourceKey(): ResourceKey<VillagerTrade>;
    toString(): string;
    villagerType(): ResourceKey<VillagerType>;
}