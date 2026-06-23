import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableInt } from '../../../../../../org/apache/commons/lang3/mutable/MutableInt.d.ts'
export class FeatureCountTracker$LevelData extends Record {
    private constructor(featureData: { [key: string]: any }, chunksWithFeatures: MutableInt)
    // private chunksWithFeatures: MutableInt;
    // private featureData: { [key: string]: any };
    chunksWithFeatures(): MutableInt;
    equals(o: Object | null): boolean;
    featureData(): { [key: string]: any };
    hashCode(): number;
    toString(): string;
}