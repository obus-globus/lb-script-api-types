import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class VillagePlacements extends Object {
    static ACACIA_VILLAGE: ResourceKey<PlacedFeature>;
    static FLOWER_PLAIN_VILLAGE: ResourceKey<PlacedFeature>;
    static OAK_VILLAGE: ResourceKey<PlacedFeature>;
    static PATCH_BERRY_BUSH_VILLAGE: ResourceKey<PlacedFeature>;
    static PATCH_CACTUS_VILLAGE: ResourceKey<PlacedFeature>;
    static PATCH_TAIGA_GRASS_VILLAGE: ResourceKey<PlacedFeature>;
    static PILE_HAY_VILLAGE: ResourceKey<PlacedFeature>;
    static PILE_ICE_VILLAGE: ResourceKey<PlacedFeature>;
    static PILE_MELON_VILLAGE: ResourceKey<PlacedFeature>;
    static PILE_PUMPKIN_VILLAGE: ResourceKey<PlacedFeature>;
    static PILE_SNOW_VILLAGE: ResourceKey<PlacedFeature>;
    static PINE_VILLAGE: ResourceKey<PlacedFeature>;
    static SPRUCE_VILLAGE: ResourceKey<PlacedFeature>;
    static bootstrap(paramcontext: BootstrapContext<PlacedFeature>): void;
    constructor()
}