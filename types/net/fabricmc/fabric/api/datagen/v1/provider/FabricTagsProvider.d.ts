import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricTagsProvider$AliasGroupBuilder } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider$AliasGroupBuilder.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { TagAppender } from '../../../../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagsProvider } from '../../../../../../../net/minecraft/data/tags/TagsProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricTagsProvider<T extends Object | number | string | boolean> extends TagsProvider<T> {
    static FIXED_ORDER_FIELDS: (param0: string) => kotlin.Int;
    static KEY_COMPARATOR: (param0: string) => kotlin.Boolean;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: ResourceKey<T[]>, arg2: CompletableFuture<HolderLookup$Provider>)
    readonly aliasGroupBuilders: Map<Identifier, FabricTagsProvider$AliasGroupBuilder>;
    // private output: FabricPackOutput;
    addTags(arg0: HolderLookup$Provider): void;
    aliasGroup(arg0: string): FabricTagsProvider$AliasGroupBuilder;
    aliasGroup(arg0: Identifier): FabricTagsProvider$AliasGroupBuilder;
    builder(arg0: TagKey<T>): TagAppender<ResourceKey<T>, T>;
    getAliasGroupBuilders(): Map<Identifier, FabricTagsProvider$AliasGroupBuilder>;
}