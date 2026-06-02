import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class FeatureFlagsMetadataSection extends Record {
    static TYPE: MetadataSectionType<FeatureFlagsMetadataSection>;
    constructor(flags: FeatureFlagSet)
    // private flags: FeatureFlagSet;
    equals(o: Object | null): boolean;
    flags(): FeatureFlagSet;
    hashCode(): number;
    toString(): string;
}