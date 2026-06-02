import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { CaveSurface } from '../../../../../../../net/minecraft/world/level/levelgen/placement/CaveSurface.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class VegetationPatchConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<VegetationPatchConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(replaceable: TagKey<Block>, groundState: BlockStateProvider, vegetationFeature: Holder<PlacedFeature>, surface: CaveSurface, depth: IntProvider, extraBottomBlockChance: number, verticalRange: number, vegetationChance: number, xzRadius: IntProvider, extraEdgeColumnChance: number)
    depth: IntProvider;
    extraBottomBlockChance: number;
    extraEdgeColumnChance: number;
    groundState: BlockStateProvider;
    replaceable: TagKey<Block>;
    surface: CaveSurface;
    vegetationChance: number;
    vegetationFeature: Holder<PlacedFeature>;
    verticalRange: number;
    xzRadius: IntProvider;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<Object, Object>>>;
}