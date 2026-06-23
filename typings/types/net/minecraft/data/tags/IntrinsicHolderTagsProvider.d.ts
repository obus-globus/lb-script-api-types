import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagsProvider } from '../../../../net/minecraft/data/tags/TagsProvider.d.ts'
import type { TagsProvider$TagLookup } from '../../../../net/minecraft/data/tags/TagsProvider$TagLookup.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export abstract class IntrinsicHolderTagsProvider<T extends unknown> extends TagsProvider<T> {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: Object) => boolean;
    static LOGGER: Logger;
    constructor(output: PackOutput, registryKey: ResourceKey<T[]>, lookupProvider: CompletableFuture<HolderLookup$Provider>, parentProvider: CompletableFuture<(param0: T) => Object | null>, keyExtractor: (param0: T) => ResourceKey<T>)
    constructor(output: PackOutput, registryKey: ResourceKey<T[]>, lookupProvider: CompletableFuture<HolderLookup$Provider>, keyExtractor: (param0: T) => ResourceKey<T>)
    // private keyExtractor: (param0: T) => ResourceKey<T>;
    tag(tag: TagKey<T>): TagAppender<T, T>;
}