import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { FloatProvider } from '../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { VerticalAnchor } from '../../../../../../net/minecraft/world/level/levelgen/VerticalAnchor.d.ts'
import type { CanyonCarverConfiguration$CanyonShapeConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CanyonCarverConfiguration$CanyonShapeConfiguration.d.ts'
import type { CarverConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarverConfiguration.d.ts'
import type { CarverDebugSettings } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarverDebugSettings.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { ProbabilityFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/ProbabilityFeatureConfiguration.d.ts'
import type { HeightProvider } from '../../../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProvider.d.ts'
export class CanyonCarverConfiguration extends CarverConfiguration {
    static CODEC: Codec<CanyonCarverConfiguration>;
    static CODEC: Codec<ProbabilityFeatureConfiguration>;
    static CODEC: MapCodec<CarverConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(probability: number, y: HeightProvider, yScale: FloatProvider, lavaLevel: VerticalAnchor, debugSettings: CarverDebugSettings, replaceable: Holder<T>[], verticalRotation: FloatProvider, shape: CanyonCarverConfiguration$CanyonShapeConfiguration)
    constructor(carver: CarverConfiguration, distanceFactor: FloatProvider, shape: CanyonCarverConfiguration$CanyonShapeConfiguration)
    shape: CanyonCarverConfiguration$CanyonShapeConfiguration;
    verticalRotation: FloatProvider;
}