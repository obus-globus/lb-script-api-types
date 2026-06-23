import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { StructureProcessorList } from '../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorList.d.ts'
export class FossilFeatureConfiguration extends Object implements FeatureConfiguration {
    static CODEC: Codec<FossilFeatureConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(fossilStructures: Identifier[], overlayStructures: Identifier[], fossilProcessors: Holder<StructureProcessorList>, overlayProcessors: Holder<StructureProcessorList>, maxEmptyCornersAllowed: number)
    fossilProcessors: Holder<StructureProcessorList>;
    fossilStructures: Identifier[];
    maxEmptyCornersAllowed: number;
    overlayProcessors: Holder<StructureProcessorList>;
    overlayStructures: Identifier[];
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
}