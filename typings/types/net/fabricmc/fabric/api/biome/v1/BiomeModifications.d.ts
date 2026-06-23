import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeModification } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeModification.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { MobCategory } from '../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { GenerationStep$Decoration } from '../../../../../../net/minecraft/world/level/levelgen/GenerationStep$Decoration.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class BiomeModifications extends Object {
    static addCarver(paramarg0: (param0: BiomeSelectionContext) => boolean, paramarg1: ResourceKey<ConfiguredWorldCarver<any>>): void;
    static addFeature(paramarg0: (param0: BiomeSelectionContext) => boolean, paramarg1: GenerationStep$Decoration, paramarg2: ResourceKey<PlacedFeature>): void;
    static addSpawn(paramarg0: (param0: BiomeSelectionContext) => boolean, paramarg1: MobCategory, paramarg2: EntityType<any>, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static create(paramarg0: Identifier): BiomeModification;
    private constructor()
}