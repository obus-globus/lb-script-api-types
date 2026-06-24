import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
export class SurfaceRuleData extends Object {
    static air(): SurfaceRules$RuleSource;
    static end(): SurfaceRules$RuleSource;
    static nether(parambiomes: HolderGetter<Biome>): SurfaceRules$RuleSource;
    static overworld(parambiomes: HolderGetter<Biome>): SurfaceRules$RuleSource;
    static overworldLike(parambiomes: HolderGetter<Biome>, paramdoPreliminarySurfaceCheck: boolean, parambedrockRoof: boolean, parambedrockFloor: boolean): SurfaceRules$RuleSource;
    constructor()
}