import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { VerticalAnchor } from '../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { CaveSurface } from '../../../../../net/minecraft/world/level/levelgen/placement/CaveSurface.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class SurfaceRules extends Object {
    static DEEP_UNDER_FLOOR: SurfaceRules$ConditionSource;
    static ON_CEILING: SurfaceRules$ConditionSource;
    static ON_FLOOR: SurfaceRules$ConditionSource;
    static UNDER_CEILING: SurfaceRules$ConditionSource;
    static UNDER_FLOOR: SurfaceRules$ConditionSource;
    static VERY_DEEP_UNDER_FLOOR: SurfaceRules$ConditionSource;
    static abovePreliminarySurface(): SurfaceRules$ConditionSource;
    static bandlands(): SurfaceRules$RuleSource;
    static hole(): SurfaceRules$ConditionSource;
    static ifTrue(paramcondition: SurfaceRules$ConditionSource, paramnext: SurfaceRules$RuleSource): SurfaceRules$RuleSource;
    static isBiome(parambiomes: HolderGetter<Biome>, ...paramtarget: ResourceKey<Biome>[]): SurfaceRules$ConditionSource;
    static noiseCondition2d(paramnoise: ResourceKey<NormalNoise$NoiseParameters>, paramminRange: number): SurfaceRules$ConditionSource;
    static noiseCondition2d(paramnoise: ResourceKey<NormalNoise$NoiseParameters>, paramminRange: number, parammaxRange: number): SurfaceRules$ConditionSource;
    static noiseCondition3d(paramnoise: ResourceKey<NormalNoise$NoiseParameters>, paramminRange: number): SurfaceRules$ConditionSource;
    static noiseCondition3d(paramnoise: ResourceKey<NormalNoise$NoiseParameters>, paramminRange: number, parammaxRange: number): SurfaceRules$ConditionSource;
    static not(paramtarget: SurfaceRules$ConditionSource): SurfaceRules$ConditionSource;
    static sequence(...paramrules: SurfaceRules$RuleSource[]): SurfaceRules$RuleSource;
    static state(paramstate: BlockState): SurfaceRules$RuleSource;
    static steep(): SurfaceRules$ConditionSource;
    static stoneDepthCheck(paramoffset: number, paramaddSurfaceDepth1: boolean, paramsecondaryDepthRange: number, paramsurfaceType: CaveSurface): SurfaceRules$ConditionSource;
    static stoneDepthCheck(paramoffset: number, paramaddSurfaceDepth1: boolean, paramsurfaceType: CaveSurface): SurfaceRules$ConditionSource;
    static temperature(): SurfaceRules$ConditionSource;
    static verticalGradient(paramrandomName: string, paramtrueAtAndBelow: VerticalAnchor, paramfalseAtAndAbove: VerticalAnchor): SurfaceRules$ConditionSource;
    static waterBlockCheck(paramoffset: number, paramsurfaceDepthMultiplier: number): SurfaceRules$ConditionSource;
    static waterStartCheck(paramoffset: number, paramsurfaceDepthMultiplier: number): SurfaceRules$ConditionSource;
    static yBlockCheck(paramanchor: VerticalAnchor, paramsurfaceDepthMultiplier: number): SurfaceRules$ConditionSource;
    static yStartCheck(paramanchor: VerticalAnchor, paramsurfaceDepthMultiplier: number): SurfaceRules$ConditionSource;
    constructor()
}