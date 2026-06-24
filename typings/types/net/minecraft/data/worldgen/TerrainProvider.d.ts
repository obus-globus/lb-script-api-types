import type { Float2FloatFunction } from '../../../../it/unimi/dsi/fastutil/floats/Float2FloatFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CubicSpline } from '../../../../net/minecraft/util/CubicSpline.d.ts'
export class TerrainProvider extends Object {
    static buildErosionOffsetSpline(paramerosion: Object | null, paramridges: Object | null, paramlowValley: number, paramhill: number, paramtallHill: number, parammountainFactor: number, paramplain: number, paramswamp: number, paramincludeExtremeHills: boolean, paramsaddle: boolean, paramoffsetTransformer: (param0: number) => number): CubicSpline<Object>;
    static overworldFactor(paramcontinents: Object | null, paramerosion: Object | null, paramweirdness: Object | null, paramridges: Object | null, paramamplified: boolean): CubicSpline<Object>;
    static overworldJaggedness(paramcontinents: Object | null, paramerosion: Object | null, paramweirdness: Object | null, paramridges: Object | null, paramamplified: boolean): CubicSpline<Object>;
    static overworldOffset(paramcontinents: Object | null, paramerosion: Object | null, paramridges: Object | null, paramamplified: boolean): CubicSpline<Object>;
    static peaksAndValleys(paramweirdness: number): number;
    constructor()
}