import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class CreativeModeTab$ItemDisplayParameters extends Record {
    // private enabledFeatures: FeatureFlagSet;
    // private hasPermissions: boolean;
    // private holders: HolderLookup$Provider;
    enabledFeatures(): FeatureFlagSet;
    equals(o: Object | null): boolean;
    hasPermissions(): boolean;
    hashCode(): number;
    holders(): HolderLookup$Provider;
    needsUpdate(enabledFeatures: FeatureFlagSet, hasPermissions: boolean, holders: HolderLookup$Provider): boolean;
    toString(): string;
}