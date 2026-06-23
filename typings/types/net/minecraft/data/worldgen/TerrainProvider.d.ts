import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BoundedFloatFunction } from '../../../../net/minecraft/util/BoundedFloatFunction.d.ts'
import type { CubicSpline } from '../../../../net/minecraft/util/CubicSpline.d.ts'
export class TerrainProvider extends Object {
    static buildErosionOffsetSpline(paramerosion: Object | null, paramridges: Object | null, paramlowValley: number, paramhill: number, paramtallHill: number, parammountainFactor: number, paramplain: number, paramswamp: number, paramincludeExtremeHills: boolean, paramsaddle: boolean, paramoffsetTransformer: BoundedFloatFunction<number>): CubicSpline<Object, any>;
    static overworldFactor(paramcontinents: Object | null, paramerosion: Object | null, paramweirdness: Object | null, paramridges: Object | null, paramamplified: boolean): CubicSpline<Object, any>;
    static overworldJaggedness(paramcontinents: Object | null, paramerosion: Object | null, paramweirdness: Object | null, paramridges: Object | null, paramamplified: boolean): CubicSpline<Object, any>;
    static overworldOffset(paramcontinents: Object | null, paramerosion: Object | null, paramridges: Object | null, paramamplified: boolean): CubicSpline<Object, any>;
    constructor()
}