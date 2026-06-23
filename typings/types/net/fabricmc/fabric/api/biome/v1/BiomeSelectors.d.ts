import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class BiomeSelectors extends Object {
    static all(): (param0: BiomeSelectionContext) => boolean;
    static excludeByKey(paramarg0: ResourceKey<Biome>[]): (param0: BiomeSelectionContext) => boolean;
    static excludeByKey(paramarg0: Object | null): (param0: BiomeSelectionContext) => boolean;
    static foundInOverworld(): (param0: BiomeSelectionContext) => boolean;
    static foundInTheEnd(): (param0: BiomeSelectionContext) => boolean;
    static foundInTheNether(): (param0: BiomeSelectionContext) => boolean;
    static includeByKey(paramarg0: ResourceKey<Biome>[]): (param0: BiomeSelectionContext) => boolean;
    static includeByKey(paramarg0: Object | null): (param0: BiomeSelectionContext) => boolean;
    static spawnsOneOf(paramarg0: EntityType<any>[]): (param0: BiomeSelectionContext) => boolean;
    static spawnsOneOf(paramarg0: Object | null): (param0: BiomeSelectionContext) => boolean;
    static tag(paramarg0: TagKey<Biome>): (param0: BiomeSelectionContext) => boolean;
    static vanilla(): (param0: BiomeSelectionContext) => boolean;
    private constructor()
}