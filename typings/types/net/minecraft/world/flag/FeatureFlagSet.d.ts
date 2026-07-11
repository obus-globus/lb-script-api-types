import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagUniverse } from '../../../../net/minecraft/world/flag/FeatureFlagUniverse.d.ts'
export class FeatureFlagSet extends Object {
    static MAX_CONTAINER_SIZE: number;
    static of(): FeatureFlagSet;
    static of(paramflag: FeatureFlag): FeatureFlagSet;
    static of(paramflag: FeatureFlag, ...paramflags: (Object | null)[]): FeatureFlagSet;
    private constructor(universe: FeatureFlagUniverse, mask: number)
    // private mask: number;
    // private universe: FeatureFlagUniverse;
    contains(flag: FeatureFlag): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    intersects(set: FeatureFlagSet): boolean;
    isEmpty(): boolean;
    isSubsetOf(set: FeatureFlagSet): boolean;
    join(other: FeatureFlagSet): FeatureFlagSet;
    subtract(other: FeatureFlagSet): FeatureFlagSet;
}