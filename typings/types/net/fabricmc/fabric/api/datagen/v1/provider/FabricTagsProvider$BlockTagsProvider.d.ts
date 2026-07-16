import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricTagsProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { BlockItemTagAppender } from '../../../../../../../net/minecraft/data/tags/BlockItemTagAppender.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricTagsProvider$BlockTagsProvider extends FabricTagsProvider<Block> {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: string, param1: string) => number;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    builder(arg0: TagKey<Block>): BlockItemTagAppender<Block>;
}