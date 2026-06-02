import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FeatureCountTracker$FeatureData } from '../../../../../../net/minecraft/world/level/levelgen/feature/FeatureCountTracker$FeatureData.d.ts'
import type { MutableInt } from '../../../../../../org/apache/commons/lang3/mutable/MutableInt.d.ts'
export class FeatureCountTracker$LevelData extends Record {
    private constructor(featureData: Object2IntMap<FeatureCountTracker$FeatureData>, chunksWithFeatures: MutableInt)
    // private chunksWithFeatures: MutableInt;
    // private featureData: Object2IntMap<FeatureCountTracker$FeatureData>;
    chunksWithFeatures(): MutableInt;
    equals(o: Object | null): boolean;
    featureData(): Object2IntMap<FeatureCountTracker$FeatureData>;
    hashCode(): number;
    toString(): string;
}