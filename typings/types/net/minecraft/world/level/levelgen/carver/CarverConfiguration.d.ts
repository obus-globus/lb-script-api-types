import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { FloatProvider } from '../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { VerticalAnchor } from '../../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { CarverDebugSettings } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarverDebugSettings.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { ProbabilityFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/ProbabilityFeatureConfiguration.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
export class CarverConfiguration extends ProbabilityFeatureConfiguration {
    static CODEC: MapCodec<CarverConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(probability: number, y: HeightProvider, yScale: FloatProvider, lavaLevel: VerticalAnchor, debugSettings: CarverDebugSettings, replaceable: Holder<Block>[])
    debugSettings: CarverDebugSettings;
    lavaLevel: VerticalAnchor;
    replaceable: Holder<Block>[];
    y: HeightProvider;
    yScale: FloatProvider;
}