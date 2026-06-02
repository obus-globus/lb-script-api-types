import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSize.d.ts'
import type { ThreeLayersFeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/ThreeLayersFeatureSize.d.ts'
import type { TwoLayersFeatureSize } from '../../../../../../../net/minecraft/world/level/levelgen/feature/featuresize/TwoLayersFeatureSize.d.ts'
export class FeatureSizeType<P extends FeatureSize> extends Object {
    static THREE_LAYERS_FEATURE_SIZE: FeatureSizeType<ThreeLayersFeatureSize>;
    static TWO_LAYERS_FEATURE_SIZE: FeatureSizeType<TwoLayersFeatureSize>;
    private constructor(codec: MapCodec<P>)
    // private codec: MapCodec<P>;
    codec(): MapCodec<P>;
}