import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { AdvancementSubProvider } from '../../../../net/minecraft/data/advancements/AdvancementSubProvider.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class AdvancementProvider extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput, registries: CompletableFuture<HolderLookup$Provider>, subProviders: AdvancementSubProvider[])
    // private pathProvider: PackOutput$PathProvider;
    // private registries: CompletableFuture<HolderLookup$Provider>;
    // private subProviders: AdvancementSubProvider[];
    getName(): string;
    run(cache: CachedOutput): CompletableFuture<Object>;
}