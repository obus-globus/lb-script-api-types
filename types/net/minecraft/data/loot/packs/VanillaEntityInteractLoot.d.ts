import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LootTableSubProvider } from '../../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class VanillaEntityInteractLoot extends Record implements LootTableSubProvider {
    constructor(registries: HolderLookup$Provider)
    // private registries: HolderLookup$Provider;
    equals(o: Object | null): boolean;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    hashCode(): number;
    registries(): HolderLookup$Provider;
    toString(): string;
}