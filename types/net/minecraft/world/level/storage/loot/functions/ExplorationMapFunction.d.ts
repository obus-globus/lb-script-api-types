import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Structure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { MapDecorationType } from '../../../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ExplorationMapFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ExplorationMapFunction$Builder.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ExplorationMapFunction extends LootItemConditionalFunction {
    static DEFAULT_DECORATION: Holder<MapDecorationType>;
    static DEFAULT_DESTINATION: TagKey<Structure>;
    static DEFAULT_SEARCH_RADIUS: number;
    static DEFAULT_SKIP_EXISTING: boolean;
    static DEFAULT_ZOOM: number;
    static MAP_CODEC: MapCodec<ExplorationMapFunction>;
    static makeExplorationMap(): ExplorationMapFunction$Builder;
    private constructor(predicates: LootItemCondition[], destination: TagKey<Structure>, mapDecoration: Holder<MapDecorationType>, zoom: number, searchRadius: number, skipKnownStructures: boolean)
    // private destination: TagKey<Structure>;
    // private mapDecoration: Holder<MapDecorationType>;
    // private searchRadius: number;
    // private skipKnownStructures: boolean;
    // private zoom: number;
    codec(): MapCodec<ExplorationMapFunction>;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}