import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { BlockItemTagAppender } from '../../../../net/minecraft/data/tags/BlockItemTagAppender.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagsProvider } from '../../../../net/minecraft/data/tags/TagsProvider.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class VanillaBlockTagsProvider extends TagsProvider<Block> {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: Object) => boolean;
    static LOGGER: Logger;
    constructor(output: PackOutput, lookupProvider: CompletableFuture<HolderLookup$Provider>)
    addTags(registries: HolderLookup$Provider): void;
    tag(tag: TagKey<Block>): BlockItemTagAppender<Block>;
    tag(tag: TagKey<Block>, replace: boolean): TagAppender<Block>;
}