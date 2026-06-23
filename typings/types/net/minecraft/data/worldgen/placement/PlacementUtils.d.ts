import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockPredicate } from '../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { BlockPredicateFilter } from '../../../../../net/minecraft/world/level/levelgen/placement/BlockPredicateFilter.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { PlacementFilter } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacementFilter.d.ts'
import type { PlacementModifier } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifier.d.ts'
export class PlacementUtils extends Object {
    static FULL_RANGE: PlacementModifier;
    static HEIGHTMAP: PlacementModifier;
    static HEIGHTMAP_NO_LEAVES: PlacementModifier;
    static HEIGHTMAP_OCEAN_FLOOR: PlacementModifier;
    static HEIGHTMAP_TOP_SOLID: PlacementModifier;
    static HEIGHTMAP_WORLD_SURFACE: PlacementModifier;
    static RANGE_10_10: PlacementModifier;
    static RANGE_4_4: PlacementModifier;
    static RANGE_8_8: PlacementModifier;
    static RANGE_BOTTOM_TO_MAX_TERRAIN_HEIGHT: PlacementModifier;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    static countExtra(paramcount: number, paramchance: number, paramextra: number): PlacementModifier;
    static createKey(paramname: string): ResourceKey<PlacedFeature>;
    static filtered(paramfeature: Object | null, paramconfig: FeatureConfiguration | null, parampredicate: BlockPredicate): Holder<PlacedFeature>;
    static filteredByBlockSurvival(paramblock: Block): BlockPredicateFilter;
    static inlinePlaced(paramfeature: Object | null, paramconfig: FeatureConfiguration | null, paramplacedFeatures: (Object | null)[]): Holder<PlacedFeature>;
    static inlinePlaced(paramconfiguredFeature: Holder<ConfiguredFeature<any, any>>, paramplacedFeatures: (Object | null)[]): Holder<PlacedFeature>;
    static isEmpty(): PlacementFilter;
    static onlyWhenEmpty(paramfeature: Object | null, paramconfig: FeatureConfiguration | null): Holder<PlacedFeature>;
    static register(paramcontext: BootstrapContext<PlacedFeature>, paramid: ResourceKey<PlacedFeature>, paramfeature: Holder<ConfiguredFeature<any, any>>, paramplacementModifiers: PlacementModifier[]): void;
    static register(paramcontext: BootstrapContext<PlacedFeature>, paramid: ResourceKey<PlacedFeature>, paramfeature: Holder<ConfiguredFeature<any, any>>, paramplacementModifiers: (Object | null)[]): void;
    constructor()
}