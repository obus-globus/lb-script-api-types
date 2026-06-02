import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FuelValueEvents$Context } from '../../../../../../net/fabricmc/fabric/api/registry/FuelValueEvents$Context.d.ts'
import type { HolderLookup$Provider } from '../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class FuelRegistryEventsContextImpl extends Record implements FuelValueEvents$Context {
    // private baseSmeltTime: number;
    // private enabledFeatures: FeatureFlagSet;
    // private registries: HolderLookup$Provider;
    baseSmeltTime(): number;
    enabledFeatures(): FeatureFlagSet;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registries(): HolderLookup$Provider;
    toString(): string;
}