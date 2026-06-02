import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricTagsProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { TagAppender } from '../../../../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricTagsProvider$FabricIntrinsicHolderTagsProvider<T extends Object | number | string | boolean> extends FabricTagsProvider<T> {
    static FIXED_ORDER_FIELDS: (param0: string) => kotlin.Int;
    static KEY_COMPARATOR: (param0: string) => kotlin.Boolean;
    static LOGGER: Logger;
    constructor(arg0: FabricPackOutput, arg1: ResourceKey<T[]>, arg2: CompletableFuture<HolderLookup$Provider>, arg3: (param0: T) => ResourceKey<T>)
    // private valueToKey: (param0: T) => ResourceKey<T>;
    valueLookupBuilder(arg0: TagKey<T>): TagAppender<T, T>;
}