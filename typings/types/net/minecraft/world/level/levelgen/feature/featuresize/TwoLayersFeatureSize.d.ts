import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { OptionalInt } from '../../../../../../../java/util/OptionalInt.d.ts'
import type { FeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSize.d.ts'
import type { FeatureSizeType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSizeType.d.ts'
export class TwoLayersFeatureSize extends FeatureSize {
    static CODEC: MapCodec<TwoLayersFeatureSize>;
    constructor(limit: number, lowerSize: number, upperSize: number)
    constructor(limit: number, lowerSize: number, upperSize: number, minClippedHeight: OptionalInt)
    // private limit: number;
    // private lowerSize: number;
    // private upperSize: number;
    getSizeAtHeight(treeHeight: number, yo: number): number;
    type(): FeatureSizeType<any>;
}