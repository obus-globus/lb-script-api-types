import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { LootTableProvider$SubProviderEntry } from '../../../../net/minecraft/data/loot/LootTableProvider$SubProviderEntry.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class LootTableProvider extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput, requiredTables: ResourceKey<LootTable>[], subProviders: LootTableProvider$SubProviderEntry[], registries: CompletableFuture<HolderLookup$Provider>)
    // private pathProvider: PackOutput$PathProvider;
    // private registries: CompletableFuture<HolderLookup$Provider>;
    // private requiredTables: ResourceKey<LootTable>[];
    // private subProviders: LootTableProvider$SubProviderEntry[];
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
    // private run(cache: CachedOutput, registries: HolderLookup$Provider): CompletableFuture<Object>;
}