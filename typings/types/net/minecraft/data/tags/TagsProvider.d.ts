import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../net/minecraft/data/CachedOutput.d.ts'
import type { DataProvider } from '../../../../net/minecraft/data/DataProvider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { PackOutput$PathProvider } from '../../../../net/minecraft/data/PackOutput$PathProvider.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagsProvider$TagLookup } from '../../../../net/minecraft/data/tags/TagsProvider$TagLookup.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagBuilder } from '../../../../net/minecraft/tags/TagBuilder.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export abstract class TagsProvider<T extends unknown> extends Object implements DataProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(output: PackOutput, registryKey: ResourceKey<T[]>, lookupProvider: CompletableFuture<HolderLookup$Provider>)
    constructor(output: PackOutput, registryKey: ResourceKey<T[]>, lookupProvider: CompletableFuture<HolderLookup$Provider>, parentProvider: CompletableFuture<(param0: TagKey<T>) => Optional<TagBuilder>>)
    builders: Map<Identifier, TagBuilder>;
    // private contentsDone: CompletableFuture<void>;
    // private lookupProvider: CompletableFuture<HolderLookup$Provider>;
    // private parentProvider: CompletableFuture<(param0: TagKey<T>) => Optional<TagBuilder>>;
    // private pathProvider: PackOutput$PathProvider;
    // private registryKey: ResourceKey<T[]>;
    // private tagAliasPathResolver: PackOutput$PathProvider;
    addTags(registries: HolderLookup$Provider): void;
    contentsGetter(): CompletableFuture<(param0: TagKey<T>) => Optional<TagBuilder>>;
    createContentsProvider(): CompletableFuture<HolderLookup$Provider>;
    getName(): string;
    getOrCreateRawBuilder(tag: TagKey<T>): TagBuilder;
    run(cache: CachedOutput): CompletableFuture<Object>;
    tag(tag: TagKey<T>): TagAppender<T>;
    tag(tag: TagKey<T>, replace: boolean): TagAppender<T>;
}