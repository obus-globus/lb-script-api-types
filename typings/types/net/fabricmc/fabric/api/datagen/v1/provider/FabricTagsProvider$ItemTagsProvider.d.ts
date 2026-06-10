import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricTagsProvider$BlockTagsProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider$BlockTagsProvider.d.ts'
import type { FabricTagsProvider$FabricIntrinsicHolderTagsProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider$FabricIntrinsicHolderTagsProvider.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { TagBuilder } from '../../../../../../../net/minecraft/tags/TagBuilder.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricTagsProvider$ItemTagsProvider extends FabricTagsProvider$FabricIntrinsicHolderTagsProvider<Item> {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: Object) => boolean;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>, arg2: FabricTagsProvider$BlockTagsProvider)
    // private blockTagBuilderProvider: (param0: TagKey<Block>) => TagBuilder;
    copy(arg0: TagKey<Block>, arg1: TagKey<Item>): void;
}