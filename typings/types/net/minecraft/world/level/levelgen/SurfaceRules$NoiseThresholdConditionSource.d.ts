import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class SurfaceRules$NoiseThresholdConditionSource extends Record implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    private constructor(noise: ResourceKey<NormalNoise$NoiseParameters>, minThreshold: number, maxThreshold: number, is3d: boolean)
    // private is3d: boolean;
    // private maxThreshold: number;
    // private minThreshold: number;
    // private noise: ResourceKey<NormalNoise$NoiseParameters>;
    apply(ruleContext: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): MapCodec<SurfaceRules$NoiseThresholdConditionSource>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    is3d(): boolean;
    maxThreshold(): number;
    minThreshold(): number;
    noise(): ResourceKey<NormalNoise$NoiseParameters>;
    toString(): string;
}