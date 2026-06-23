import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ConfiguredFeature } from '../../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { PlacedFeature } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class FeatureCountTracker$FeatureData extends Record {
    private constructor(feature: ConfiguredFeature<any, any>, topFeature: Optional<PlacedFeature>)
    // private feature: ConfiguredFeature<any, any>;
    // private topFeature: Optional<PlacedFeature>;
    equals(o: Object | null): boolean;
    feature(): ConfiguredFeature<any, any>;
    hashCode(): number;
    toString(): string;
    topFeature(): Optional<PlacedFeature>;
}