import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { OptionalInt } from '../../../../../../../java/util/OptionalInt.d.ts'
import type { FeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSize.d.ts'
import type { FeatureSizeType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSizeType.d.ts'
export class ThreeLayersFeatureSize extends FeatureSize {
    static CODEC: Codec<FeatureSize>;
    static CODEC: MapCodec<ThreeLayersFeatureSize>;
    constructor(limit: number, upperLimit: number, lowerSize: number, middleSize: number, upperSize: number, minClippedHeight: OptionalInt)
    // private limit: number;
    // private lowerSize: number;
    // private middleSize: number;
    // private upperLimit: number;
    // private upperSize: number;
    getSizeAtHeight(treeHeight: number, yo: number): number;
    type(): FeatureSizeType<any>;
}