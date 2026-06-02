import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export interface FeatureElement extends Object{
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    requiredFeatures(): FeatureFlagSet;
}