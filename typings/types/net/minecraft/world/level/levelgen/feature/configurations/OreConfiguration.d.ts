import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { OreConfiguration$TargetBlockState } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/OreConfiguration$TargetBlockState.d.ts'
import type { RuleTest } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTest.d.ts'
export class OreConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<OreConfiguration>;
    static NONE: NoneFeatureConfiguration;
    static target(paramrule: RuleTest, paramstate: BlockState): OreConfiguration$TargetBlockState;
    constructor(targetBlockStates: OreConfiguration$TargetBlockState[], size: number)
    constructor(targetBlockStates: OreConfiguration$TargetBlockState[], size: number, discardChanceOnAirExposure: number)
    constructor(target: RuleTest, state: BlockState, size: number)
    constructor(target: RuleTest, state: BlockState, size: number, discardChanceOnAirExposure: number)
    discardChanceOnAirExposure: number;
    size: number;
    targetStates: OreConfiguration$TargetBlockState[];
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}