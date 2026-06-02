import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { BlockPileConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/BlockPileConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { BlockStateProvider } from '../../../../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProvider.d.ts'
export class NetherForestVegetationConfig extends BlockPileConfiguration {
    static CODEC: Codec<BlockPileConfiguration>;
    static CODEC: Codec<NetherForestVegetationConfig>;
    static NONE: NoneFeatureConfiguration;
    constructor(stateProvider: BlockStateProvider, spreadWidth: number, spreadHeight: number)
    spreadHeight: number;
    spreadWidth: number;
}