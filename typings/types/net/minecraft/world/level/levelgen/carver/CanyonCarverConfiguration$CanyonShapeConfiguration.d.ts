import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FloatProvider } from '../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
export class CanyonCarverConfiguration$CanyonShapeConfiguration extends Object {
    static CODEC: Codec<CanyonCarverConfiguration$CanyonShapeConfiguration>;
    constructor(distanceFactor: FloatProvider, thickness: FloatProvider, widthSmoothness: number, horizontalRadiusFactor: FloatProvider, verticalRadiusDefaultFactor: number, verticalRadiusCenterFactor: number)
    distanceFactor: FloatProvider;
    horizontalRadiusFactor: FloatProvider;
    thickness: FloatProvider;
    verticalRadiusCenterFactor: number;
    verticalRadiusDefaultFactor: number;
    widthSmoothness: number;
}