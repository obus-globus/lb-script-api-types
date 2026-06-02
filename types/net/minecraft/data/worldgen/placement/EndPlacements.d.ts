import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class EndPlacements extends Object {
    static CHORUS_PLANT: ResourceKey<PlacedFeature>;
    static END_GATEWAY_RETURN: ResourceKey<PlacedFeature>;
    static END_ISLAND_DECORATED: ResourceKey<PlacedFeature>;
    static END_PLATFORM: ResourceKey<PlacedFeature>;
    static END_SPIKE: ResourceKey<PlacedFeature>;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    constructor()
}