import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { TagsProvider } from '../../../../net/minecraft/data/tags/TagsProvider.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class FluidTagsProvider extends TagsProvider<Fluid> {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput, lookupProvider: CompletableFuture<HolderLookup$Provider>)
    addTags(registries: HolderLookup$Provider): void;
}