import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { DatapackStructureReport$Entry } from '../../../../net/minecraft/data/info/DatapackStructureReport$Entry.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class DatapackStructureReport extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput)
    // private output: PackOutput;
    getName(): string;
    // private listRegistries(): Map<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>;
    // private putIfNotPresent(output: Map<ResourceKey<(Object | null)[]>, DatapackStructureReport$Entry>, key: ResourceKey<(Object | null)[]>, entry: DatapackStructureReport$Entry): void;
    run(cache: CachedOutput): CompletableFuture<Object>;
}