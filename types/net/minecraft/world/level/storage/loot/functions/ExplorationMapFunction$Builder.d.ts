import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Structure } from '../../../../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { MapDecorationType } from '../../../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class ExplorationMapFunction$Builder extends LootItemConditionalFunction$Builder<ExplorationMapFunction$Builder> {
    constructor()
    // private destination: TagKey<Structure>;
    // private mapDecoration: Holder<MapDecorationType>;
    // private searchRadius: number;
    // private skipKnownStructures: boolean;
    // private zoom: number;
    build(): LootItemFunction;
    getThis(): ExplorationMapFunction$Builder;
    setDestination(destination: TagKey<Structure>): ExplorationMapFunction$Builder;
    setMapDecoration(mapDecoration: Holder<MapDecorationType>): ExplorationMapFunction$Builder;
    setSearchRadius(searchRadius: number): ExplorationMapFunction$Builder;
    setSkipKnownStructures(skipKnownStructures: boolean): ExplorationMapFunction$Builder;
    setZoom(zoom: number): ExplorationMapFunction$Builder;
}