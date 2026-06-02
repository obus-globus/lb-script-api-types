import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export interface FuelValueEvents$Context extends Object{
    baseSmeltTime(): number;
    enabledFeatures(): FeatureFlagSet;
    registries(): HolderLookup$Provider;
}