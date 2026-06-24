import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { IntProvider } from '../../../../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { GeodeBlockSettings } from '../../../../../../../net/minecraft/world/level/levelgen/GeodeBlockSettings.d.ts'
import type { GeodeCrackSettings } from '../../../../../../../net/minecraft/world/level/levelgen/GeodeCrackSettings.d.ts'
import type { GeodeLayerSettings } from '../../../../../../../net/minecraft/world/level/levelgen/GeodeLayerSettings.d.ts'
import type { ConfiguredFeature } from '../../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { FeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class GeodeConfiguration extends Record implements FeatureConfiguration {
    static CHANCE_RANGE: Codec<number>;
    static CODEC: Codec<GeodeConfiguration>;
    static NONE: NoneFeatureConfiguration;
    constructor(geodeBlockSettings: GeodeBlockSettings, geodeLayerSettings: GeodeLayerSettings, geodeCrackSettings: GeodeCrackSettings, usePotentialPlacementsChance: number, useAlternateLayer0Chance: number, placementsRequireLayer0Alternate: boolean, outerWallDistance: IntProvider, distributionPoints: IntProvider, pointOffset: IntProvider, minGenOffset: number, maxGenOffset: number, noiseMultiplier: number, invalidBlocksThreshold: number)
    // private distributionPoints: IntProvider;
    // private geodeBlockSettings: GeodeBlockSettings;
    // private geodeCrackSettings: GeodeCrackSettings;
    // private geodeLayerSettings: GeodeLayerSettings;
    // private invalidBlocksThreshold: number;
    // private maxGenOffset: number;
    // private minGenOffset: number;
    // private noiseMultiplier: number;
    // private outerWallDistance: IntProvider;
    // private placementsRequireLayer0Alternate: boolean;
    // private pointOffset: IntProvider;
    // private useAlternateLayer0Chance: number;
    // private usePotentialPlacementsChance: number;
    distributionPoints(): IntProvider;
    equals(o: Object | null): boolean;
    geodeBlockSettings(): GeodeBlockSettings;
    geodeCrackSettings(): GeodeCrackSettings;
    geodeLayerSettings(): GeodeLayerSettings;
    getSubFeatures(): Stream<Holder<ConfiguredFeature<any, any>>>;
    hashCode(): number;
    invalidBlocksThreshold(): number;
    maxGenOffset(): number;
    minGenOffset(): number;
    noiseMultiplier(): number;
    outerWallDistance(): IntProvider;
    placementsRequireLayer0Alternate(): boolean;
    pointOffset(): IntProvider;
    toString(): string;
    useAlternateLayer0Chance(): number;
    usePotentialPlacementsChance(): number;
}