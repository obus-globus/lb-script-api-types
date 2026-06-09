import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export interface LootTableSubProvider extends Object {
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
}