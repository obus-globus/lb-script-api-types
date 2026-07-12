import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { FeatureFlagUniverse } from '../../../../net/minecraft/world/flag/FeatureFlagUniverse.d.ts'
export class FeatureFlagRegistry extends Object {
    private constructor(universe: FeatureFlagUniverse, allFlags: FeatureFlagSet, names: Map<Identifier, FeatureFlag>)
    // private allFlags: FeatureFlagSet;
    // private names: Map<Identifier, FeatureFlag>;
    // private universe: FeatureFlagUniverse;
    allFlags(): FeatureFlagSet;
    codec(): Codec<FeatureFlagSet>;
    fromNames(flagIds: Identifier[]): FeatureFlagSet;
    fromNames(flagIds: Identifier[], unknownFlags: (param0: Identifier) => void): FeatureFlagSet;
    isSubset(set: FeatureFlagSet): boolean;
    subset(...flags: FeatureFlag[]): FeatureFlagSet;
    toNames(set: FeatureFlagSet): Identifier[];
}