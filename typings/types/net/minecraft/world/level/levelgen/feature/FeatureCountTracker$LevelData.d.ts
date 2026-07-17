import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutableInt } from '../../../../../../org/apache/commons/lang3/mutable/MutableInt.d.ts'
export class FeatureCountTracker$LevelData extends Record {
    private constructor(featureData: JavaMap<any, any>, chunksWithFeatures: MutableInt)
    // private chunksWithFeatures: MutableInt;
    // private featureData: JavaMap<any, any>;
    chunksWithFeatures(): MutableInt;
    equals(o: Object | null): boolean;
    featureData(): JavaMap<any, any>;
    hashCode(): number;
    toString(): string;
}