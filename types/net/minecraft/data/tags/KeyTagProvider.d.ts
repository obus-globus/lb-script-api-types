import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagsProvider } from '../../../../net/minecraft/data/tags/TagsProvider.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export abstract class KeyTagProvider<T extends Object | number | string | boolean> extends TagsProvider<T> {
    static FIXED_ORDER_FIELDS: (param0: string) => kotlin.Int;
    static KEY_COMPARATOR: (param0: string) => kotlin.Boolean;
    static LOGGER: Logger;
    constructor(output: PackOutput, registryKey: ResourceKey<T[]>, lookupProvider: CompletableFuture<HolderLookup$Provider>)
    tag(tag: TagKey<T>): TagAppender<ResourceKey<T>, T>;
    tag(tag: TagKey<T>, replace: boolean): TagAppender<ResourceKey<T>, T>;
}