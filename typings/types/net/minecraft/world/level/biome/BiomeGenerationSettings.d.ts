import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class BiomeGenerationSettings extends Object {
    static CODEC: MapCodec<BiomeGenerationSettings>;
    static EMPTY: BiomeGenerationSettings;
    private constructor(carvers: Holder<ConfiguredWorldCarver<any>>[], features: Holder<PlacedFeature>[][])
    boneMealFeatures: () => ConfiguredFeature<any, any>[];
    carvers: Holder<ConfiguredWorldCarver<any>>[];
    featureSet: () => PlacedFeature[];
    features: Holder<PlacedFeature>[][];
    getBoneMealFeatures(): ConfiguredFeature<any, any>[];
    getCarvers(): Holder<ConfiguredWorldCarver<any>>[];
    hasFeature(feature: PlacedFeature): boolean;
}