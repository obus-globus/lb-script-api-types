import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { PackOutput } from '../../../../net/minecraft/data/PackOutput.d.ts'
import type { IntrinsicHolderTagsProvider } from '../../../../net/minecraft/data/tags/IntrinsicHolderTagsProvider.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class EntityTypeTagsProvider extends IntrinsicHolderTagsProvider<EntityType<any>> {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: Object) => boolean;
    static LOGGER: Logger;
    constructor(output: PackOutput, lookupProvider: CompletableFuture<HolderLookup$Provider>)
    addTags(registries: HolderLookup$Provider): void;
}