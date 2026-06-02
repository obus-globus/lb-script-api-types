import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackCompatibility } from '../../../../../net/minecraft/server/packs/repository/PackCompatibility.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class Pack$Metadata extends Record {
    constructor(description: Component, compatibility: PackCompatibility, requestedFeatures: FeatureFlagSet, overlays: string[])
    // private compatibility: PackCompatibility;
    // private description: Component;
    // private overlays: string[];
    // private requestedFeatures: FeatureFlagSet;
    compatibility(): PackCompatibility;
    description(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    overlays(): string[];
    requestedFeatures(): FeatureFlagSet;
    toString(): string;
}