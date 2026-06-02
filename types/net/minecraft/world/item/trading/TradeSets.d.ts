import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { TradeSet } from '../../../../../net/minecraft/world/item/trading/TradeSet.d.ts'
import type { VillagerTrade } from '../../../../../net/minecraft/world/item/trading/VillagerTrade.d.ts'
import type { NumberProvider } from '../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class TradeSets extends Object {
    static ARMORER_LEVEL_1: ResourceKey<TradeSet>;
    static ARMORER_LEVEL_2: ResourceKey<TradeSet>;
    static ARMORER_LEVEL_3: ResourceKey<TradeSet>;
    static ARMORER_LEVEL_4: ResourceKey<TradeSet>;
    static ARMORER_LEVEL_5: ResourceKey<TradeSet>;
    static BUTCHER_LEVEL_1: ResourceKey<TradeSet>;
    static BUTCHER_LEVEL_2: ResourceKey<TradeSet>;
    static BUTCHER_LEVEL_3: ResourceKey<TradeSet>;
    static BUTCHER_LEVEL_4: ResourceKey<TradeSet>;
    static BUTCHER_LEVEL_5: ResourceKey<TradeSet>;
    static CARTOGRAPHER_LEVEL_1: ResourceKey<TradeSet>;
    static CARTOGRAPHER_LEVEL_2: ResourceKey<TradeSet>;
    static CARTOGRAPHER_LEVEL_3: ResourceKey<TradeSet>;
    static CARTOGRAPHER_LEVEL_4: ResourceKey<TradeSet>;
    static CARTOGRAPHER_LEVEL_5: ResourceKey<TradeSet>;
    static CLERIC_LEVEL_1: ResourceKey<TradeSet>;
    static CLERIC_LEVEL_2: ResourceKey<TradeSet>;
    static CLERIC_LEVEL_3: ResourceKey<TradeSet>;
    static CLERIC_LEVEL_4: ResourceKey<TradeSet>;
    static CLERIC_LEVEL_5: ResourceKey<TradeSet>;
    static FARMER_LEVEL_1: ResourceKey<TradeSet>;
    static FARMER_LEVEL_2: ResourceKey<TradeSet>;
    static FARMER_LEVEL_3: ResourceKey<TradeSet>;
    static FARMER_LEVEL_4: ResourceKey<TradeSet>;
    static FARMER_LEVEL_5: ResourceKey<TradeSet>;
    static FISHERMAN_LEVEL_1: ResourceKey<TradeSet>;
    static FISHERMAN_LEVEL_2: ResourceKey<TradeSet>;
    static FISHERMAN_LEVEL_3: ResourceKey<TradeSet>;
    static FISHERMAN_LEVEL_4: ResourceKey<TradeSet>;
    static FISHERMAN_LEVEL_5: ResourceKey<TradeSet>;
    static FLETCHER_LEVEL_1: ResourceKey<TradeSet>;
    static FLETCHER_LEVEL_2: ResourceKey<TradeSet>;
    static FLETCHER_LEVEL_3: ResourceKey<TradeSet>;
    static FLETCHER_LEVEL_4: ResourceKey<TradeSet>;
    static FLETCHER_LEVEL_5: ResourceKey<TradeSet>;
    static LEATHERWORKER_LEVEL_1: ResourceKey<TradeSet>;
    static LEATHERWORKER_LEVEL_2: ResourceKey<TradeSet>;
    static LEATHERWORKER_LEVEL_3: ResourceKey<TradeSet>;
    static LEATHERWORKER_LEVEL_4: ResourceKey<TradeSet>;
    static LEATHERWORKER_LEVEL_5: ResourceKey<TradeSet>;
    static LIBRARIAN_LEVEL_1: ResourceKey<TradeSet>;
    static LIBRARIAN_LEVEL_2: ResourceKey<TradeSet>;
    static LIBRARIAN_LEVEL_3: ResourceKey<TradeSet>;
    static LIBRARIAN_LEVEL_4: ResourceKey<TradeSet>;
    static LIBRARIAN_LEVEL_5: ResourceKey<TradeSet>;
    static MASON_LEVEL_1: ResourceKey<TradeSet>;
    static MASON_LEVEL_2: ResourceKey<TradeSet>;
    static MASON_LEVEL_3: ResourceKey<TradeSet>;
    static MASON_LEVEL_4: ResourceKey<TradeSet>;
    static MASON_LEVEL_5: ResourceKey<TradeSet>;
    static SHEPHERD_LEVEL_1: ResourceKey<TradeSet>;
    static SHEPHERD_LEVEL_2: ResourceKey<TradeSet>;
    static SHEPHERD_LEVEL_3: ResourceKey<TradeSet>;
    static SHEPHERD_LEVEL_4: ResourceKey<TradeSet>;
    static SHEPHERD_LEVEL_5: ResourceKey<TradeSet>;
    static TOOLSMITH_LEVEL_1: ResourceKey<TradeSet>;
    static TOOLSMITH_LEVEL_2: ResourceKey<TradeSet>;
    static TOOLSMITH_LEVEL_3: ResourceKey<TradeSet>;
    static TOOLSMITH_LEVEL_4: ResourceKey<TradeSet>;
    static TOOLSMITH_LEVEL_5: ResourceKey<TradeSet>;
    static WANDERING_TRADER_BUYING: ResourceKey<TradeSet>;
    static WANDERING_TRADER_COMMON: ResourceKey<TradeSet>;
    static WANDERING_TRADER_UNCOMMON: ResourceKey<TradeSet>;
    static WEAPONSMITH_LEVEL_1: ResourceKey<TradeSet>;
    static WEAPONSMITH_LEVEL_2: ResourceKey<TradeSet>;
    static WEAPONSMITH_LEVEL_3: ResourceKey<TradeSet>;
    static WEAPONSMITH_LEVEL_4: ResourceKey<TradeSet>;
    static WEAPONSMITH_LEVEL_5: ResourceKey<TradeSet>;
    static bootstrap(paramcontext: BootstrapContext<TradeSet>): Holder<TradeSet>;
    static register(paramcontext: BootstrapContext<TradeSet>, paramresourceKey: ResourceKey<TradeSet>, paramtradeTag: TagKey<VillagerTrade>): Holder$Reference<TradeSet>;
    static register(paramcontext: BootstrapContext<TradeSet>, paramresourceKey: ResourceKey<TradeSet>, paramtradeTag: TagKey<VillagerTrade>, paramnumberProvider: NumberProvider): Holder$Reference<TradeSet>;
    static resourceKey(parampath: string): ResourceKey<TradeSet>;
    constructor()
}