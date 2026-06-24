import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CubicSpline } from '../../../../../net/minecraft/util/CubicSpline.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunctions$Mapped$Type } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Mapped$Type.d.ts'
import type { DensityFunctions$Spline$Coordinate } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$Spline$Coordinate.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
export class DensityFunctions extends Object {
    static DIRECT_CODEC: Codec<DensityFunction>;
    static add(paramf1: DensityFunction, paramf2: DensityFunction): DensityFunction;
    static blendAlpha(): DensityFunction;
    static blendDensity(paraminput: DensityFunction): DensityFunction;
    static blendOffset(): DensityFunction;
    static bootstrap(paramregistry: MapCodec<DensityFunction>[]): MapCodec<DensityFunction>;
    static cache2d(paramfunction: DensityFunction): DensityFunction;
    static cacheAllInCell(paramfunction: DensityFunction): DensityFunction;
    static cacheOnce(paramfunction: DensityFunction): DensityFunction;
    static constant(paramvalue: number): DensityFunction;
    static endIslands(paramseed: number): DensityFunction;
    static findTopSurface(paramdensity: DensityFunction, paramupperBound: DensityFunction, paramlowerBound: number, paramstepSize: number): DensityFunction;
    static flatCache(paramfunction: DensityFunction): DensityFunction;
    static interpolated(paramfunction: DensityFunction): DensityFunction;
    static intervalSelect(paraminput: DensityFunction, paramthresholds: (Object | null)[], paramfunctions: DensityFunction[]): DensityFunction;
    static lerp(paramfactor: DensityFunction, paramfirst: number, paramsecond: DensityFunction): DensityFunction;
    static lerp(paramalpha: DensityFunction, paramfirst: DensityFunction, paramsecond: DensityFunction): DensityFunction;
    static map(paramfunction: DensityFunction, paramtype: DensityFunctions$Mapped$Type): DensityFunction;
    static mappedNoise(paramnoiseData: Holder<NormalNoise$NoiseParameters>, paramminTarget: number, parammaxTarget: number): DensityFunction;
    static mappedNoise(paramnoiseData: Holder<NormalNoise$NoiseParameters>, paramyScale: number, paramminTarget: number, parammaxTarget: number): DensityFunction;
    static mappedNoise(paramnoiseData: Holder<NormalNoise$NoiseParameters>, paramxzScale: number, paramyScale: number, paramminTarget: number, parammaxTarget: number): DensityFunction;
    static max(paramf1: DensityFunction, paramf2: DensityFunction): DensityFunction;
    static min(paramf1: DensityFunction, paramf2: DensityFunction): DensityFunction;
    static mul(paramf1: DensityFunction, paramf2: DensityFunction): DensityFunction;
    static noise(paramnoiseData: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    static noise(paramnoiseData: Holder<NormalNoise$NoiseParameters>, paramyScale: number): DensityFunction;
    static noise(paramnoiseData: Holder<NormalNoise$NoiseParameters>, paramxzScale: number, paramyScale: number): DensityFunction;
    static rangeChoice(paraminput: DensityFunction, paramminInclusive: number, parammaxExclusive: number, paramwhenInRange: DensityFunction, paramwhenOutOfRange: DensityFunction): DensityFunction;
    static shift(paramnoiseData: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    static shiftA(paramnoiseData: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    static shiftB(paramnoiseData: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    static shiftedNoise2d(paramshiftX: DensityFunction, paramshiftZ: DensityFunction, paramxzScale: number, paramnoiseData: Holder<NormalNoise$NoiseParameters>): DensityFunction;
    static spline(paramspline: CubicSpline<DensityFunctions$Spline$Coordinate>): DensityFunction;
    static yClampedGradient(paramfromY: number, paramtoY: number, paramfromValue: number, paramtoValue: number): DensityFunction;
    static zero(): DensityFunction;
    private constructor()
}