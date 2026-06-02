import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { DataPackConfig } from '../../../../net/minecraft/world/level/DataPackConfig.d.ts'
export class WorldDataConfiguration extends Record {
    static CODEC: Codec<WorldDataConfiguration>;
    static DEFAULT: WorldDataConfiguration;
    static ENABLED_FEATURES_ID: string;
    static MAP_CODEC: MapCodec<WorldDataConfiguration>;
    constructor(dataPacks: DataPackConfig, enabledFeatures: FeatureFlagSet)
    // private dataPacks: DataPackConfig;
    // private enabledFeatures: FeatureFlagSet;
    dataPacks(): DataPackConfig;
    enabledFeatures(): FeatureFlagSet;
    equals(o: Object | null): boolean;
    expandFeatures(newEnabledFeatures: FeatureFlagSet): WorldDataConfiguration;
    hashCode(): number;
    toString(): string;
}