import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { OptionalInt } from '../../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSizeType } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSizeType.d.ts'
export abstract class FeatureSize extends Object {
    static CODEC: Codec<FeatureSize>;
    constructor(minClippedHeight: OptionalInt)
    // private minClippedHeight: OptionalInt;
    getSizeAtHeight(treeHeight: number, yo: number): number;
    minClippedHeight(): OptionalInt;
    type(): FeatureSizeType<Object>;
}