import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DensityFunction } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$SimpleFunction } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction$SimpleFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { PerlinNoise } from '../../../../../../net/minecraft/world/level/levelgen/synth/PerlinNoise.d.ts'
export class BlendedNoise extends Object implements DensityFunction$SimpleFunction {
    static CODEC: Codec<Object>;
    static CODEC: KeyDispatchDataCodec<BlendedNoise>;
    static DIRECT_CODEC: Codec<DensityFunction>;
    static HOLDER_HELPER_CODEC: Codec<DensityFunction>;
    static createUnseeded(paramxzScale: number, paramyScale: number, paramxzFactor: number, paramyFactor: number, paramsmearScaleMultiplier: number): BlendedNoise;
    constructor(random: RandomSource, xzScale: number, yScale: number, xzFactor: number, yFactor: number, smearScaleMultiplier: number)
    private constructor(minLimitNoise: PerlinNoise, maxLimitNoise: PerlinNoise, mainNoise: PerlinNoise, xzScale: number, yScale: number, xzFactor: number, yFactor: number, smearScaleMultiplier: number)
    // private mainNoise: PerlinNoise;
    // private maxLimitNoise: PerlinNoise;
    // private maxValue: number;
    // private minLimitNoise: PerlinNoise;
    // private smearScaleMultiplier: number;
    // private xzFactor: number;
    // private xzMultiplier: number;
    // private xzScale: number;
    // private yFactor: number;
    // private yMultiplier: number;
    // private yScale: number;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    parityConfigString(sb: StringBuilder): void;
    withNewRandom(terrainRandom: RandomSource): BlendedNoise;
}