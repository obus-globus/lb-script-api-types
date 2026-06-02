import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricTagsProvider$FabricIntrinsicHolderTagsProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider$FabricIntrinsicHolderTagsProvider.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricTagsProvider$BlockTagsProvider extends FabricTagsProvider$FabricIntrinsicHolderTagsProvider<Block> {
    static FIXED_ORDER_FIELDS: (param0: string) => kotlin.Int;
    static KEY_COMPARATOR: (param0: string) => kotlin.Boolean;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
}