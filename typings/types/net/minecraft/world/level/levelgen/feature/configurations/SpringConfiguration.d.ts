import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { FluidState } from '../../../../../../../net/minecraft/world/level/material/FluidState.d.ts'
export class SpringConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<SpringConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(state: FluidState, requiresBlockBelow: boolean, rockCount: number, holeCount: number, validBlocks: Holder<T>[])
    holeCount: number;
    requiresBlockBelow: boolean;
    rockCount: number;
    state: FluidState;
    validBlocks: Holder<T>[];
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}