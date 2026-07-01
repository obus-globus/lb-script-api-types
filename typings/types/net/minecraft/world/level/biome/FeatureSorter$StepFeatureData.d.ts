import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlacedFeature } from '../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class FeatureSorter$StepFeatureData extends Record {
    constructor(features: PlacedFeature[], indexMapping: (param0: PlacedFeature) => number)
    // private features: PlacedFeature[];
    // private indexMapping: (param0: PlacedFeature) => number;
    equals(o: Object | null): boolean;
    features(): PlacedFeature[];
    hashCode(): number;
    indexMapping(): (param0: PlacedFeature) => number;
    toString(): string;
}