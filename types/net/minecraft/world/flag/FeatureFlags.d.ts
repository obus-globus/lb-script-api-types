import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagRegistry } from '../../../../net/minecraft/world/flag/FeatureFlagRegistry.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class FeatureFlags extends Object {
    static CODEC: Codec<FeatureFlagSet>;
    static DEFAULT_FLAGS: FeatureFlagSet;
    static MINECART_IMPROVEMENTS: FeatureFlag;
    static REDSTONE_EXPERIMENTS: FeatureFlag;
    static REGISTRY: FeatureFlagRegistry;
    static TRADE_REBALANCE: FeatureFlag;
    static VANILLA: FeatureFlag;
    static VANILLA_SET: FeatureFlagSet;
    static isExperimental(paramfeatures: FeatureFlagSet): boolean;
    static printMissingFlags(paramregistry: FeatureFlagRegistry, paramallowedFlags: FeatureFlagSet, paramrequestedFlags: FeatureFlagSet): string;
    static printMissingFlags(paramallowedFlags: FeatureFlagSet, paramrequestedFlags: FeatureFlagSet): string;
    constructor()
}