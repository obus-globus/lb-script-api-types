import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistrySetBuilder } from '../../../../net/minecraft/core/RegistrySetBuilder.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { PlacedFeature } from '../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class VanillaRegistries extends Object {
    static BUILDER: RegistrySetBuilder;
    static createLookup(): HolderLookup$Provider;
    static validateThatAllBiomeFeaturesHaveBiomeFilter(paramplacedFeatures: HolderGetter<PlacedFeature>, parambiomes: HolderLookup<Biome>): void;
    static validateThatAllBiomeFeaturesHaveBiomeFilter(paramprovider: HolderLookup$Provider): void;
    constructor()
}