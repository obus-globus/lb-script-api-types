import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { EndSpikeFeature$EndSpike } from '../../../../../../../net/minecraft/world/level/levelgen/feature/EndSpikeFeature$EndSpike.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class EndSpikeConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<EndSpikeConfiguration>;
    static NONE: NoneFeatureConfiguration;
    private constructor(crystalInvulnerable: boolean, spikes: EndSpikeFeature$EndSpike[], crystalBeamTarget: Optional<BlockPos>)
    constructor(crystalInvulnerable: boolean, spikes: EndSpikeFeature$EndSpike[], crystalBeamTarget: BlockPos)
    readonly crystalBeamTarget: BlockPos;
    readonly crystalInvulnerable: boolean;
    readonly spikes: EndSpikeFeature$EndSpike[];
    getCrystalBeamTarget(): BlockPos;
    getSpikes(): EndSpikeFeature$EndSpike[];
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
    isCrystalInvulnerable(): boolean;
}