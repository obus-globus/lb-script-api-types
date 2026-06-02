import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeSelectionContext } from '../../../../../../net/fabricmc/fabric/api/biome/v1/BiomeSelectionContext.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class BiomeSelectors extends Object {
    static all(): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static excludeByKey(paramarg0: E[]): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static excludeByKey(paramarg0: Object | null): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static foundInOverworld(): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static foundInTheEnd(): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static foundInTheNether(): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static includeByKey(paramarg0: E[]): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static includeByKey(paramarg0: Object | null): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static spawnsOneOf(paramarg0: (Object | null)[]): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static spawnsOneOf(paramarg0: Object | null): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static tag(paramarg0: TagKey<Biome>): (param0: BiomeSelectionContext) => kotlin.Boolean;
    static vanilla(): (param0: BiomeSelectionContext) => kotlin.Boolean;
    private constructor()
}