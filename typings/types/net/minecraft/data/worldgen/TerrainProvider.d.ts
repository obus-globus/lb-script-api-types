import type { Float2FloatFunction } from '../../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../../net/minecraft/util/CubicSpline.d.ts'
export class TerrainProvider extends Object {
    static buildErosionOffsetSpline<I extends BoundedFloatFunction<Object>>(paramerosion: I, paramridges: I, paramlowValley: number, paramhill: number, paramtallHill: number, parammountainFactor: number, paramplain: number, paramswamp: number, paramincludeExtremeHills: boolean, paramsaddle: boolean, paramoffsetTransformer: (param0: number) => number): CubicSpline<I>;
    static overworldFactor<I extends BoundedFloatFunction<Object>>(paramcontinents: I, paramerosion: I, paramweirdness: I, paramridges: I, paramamplified: boolean): CubicSpline<I>;
    static overworldJaggedness<I extends BoundedFloatFunction<Object>>(paramcontinents: I, paramerosion: I, paramweirdness: I, paramridges: I, paramamplified: boolean): CubicSpline<I>;
    static overworldOffset<I extends BoundedFloatFunction<Object>>(paramcontinents: I, paramerosion: I, paramridges: I, paramamplified: boolean): CubicSpline<I>;
    static peaksAndValleys(paramweirdness: number): number;
    constructor()
}