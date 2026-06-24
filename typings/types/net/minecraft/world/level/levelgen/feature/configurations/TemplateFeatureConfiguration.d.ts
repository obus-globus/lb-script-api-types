import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { WeightedList } from '../../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
import type { TemplateFeatureConfiguration$TemplateEntry } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/TemplateFeatureConfiguration$TemplateEntry.d.ts'
export class TemplateFeatureConfiguration extends Record implements FeatureConfiguration {
    static CODEC: Codec<TemplateFeatureConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(templates: WeightedList<TemplateFeatureConfiguration$TemplateEntry>)
    // private templates: WeightedList<TemplateFeatureConfiguration$TemplateEntry>;
    equals(o: Object | null): boolean;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    templates(): WeightedList<TemplateFeatureConfiguration$TemplateEntry>;
    toString(): string;
}