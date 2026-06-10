import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LootPool } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool.d.ts'
import type { LootPool$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootTable$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export interface FabricLootTableBuilder extends Object {
    apply(arg0: LootItemFunction[]): LootTable$Builder;
    apply(arg0: LootItemFunction): LootTable$Builder;
    modifyPools(arg0: (param0: LootPool$Builder) => void): LootTable$Builder;
    pool(arg0: LootPool): LootTable$Builder;
    pools(arg0: LootPool[]): LootTable$Builder;
}