import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
import type { CaveSurface } from '../../../../../../../net/minecraft/world/level/levelgen/placement/CaveSurface.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class VegetationPatchConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<VegetationPatchConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(replaceable: Holder<Block>[], groundState: BlockStateProvider, vegetationFeature: Holder<PlacedFeature>, surface: CaveSurface, depth: IntProvider, extraBottomBlockChance: number, verticalRange: number, vegetationChance: number, xzRadius: IntProvider, extraEdgeColumnChance: number)
    // private depth: IntProvider;
    // private extraBottomBlockChance: number;
    // private extraEdgeColumnChance: number;
    // private groundState: BlockStateProvider;
    // private replaceable: Holder<Block>[];
    // private surface: CaveSurface;
    // private vegetationChance: number;
    // private vegetationFeature: Holder<PlacedFeature>;
    // private verticalRange: number;
    // private xzRadius: IntProvider;
    depth(): IntProvider;
    equals(o: Object | null): boolean;
    extraBottomBlockChance(): number;
    extraEdgeColumnChance(): number;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    groundState(): BlockStateProvider;
    hashCode(): number;
    replaceable(): Holder<Block>[];
    surface(): CaveSurface;
    toString(): string;
    vegetationChance(): number;
    vegetationFeature(): Holder<PlacedFeature>;
    verticalRange(): number;
    xzRadius(): IntProvider;
}