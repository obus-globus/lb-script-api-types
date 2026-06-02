import type { CounterTracker } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTracker.d.ts'
import type { CounterTrackerData$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerData$Builder.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../../../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CounterTrackerBitSetWithOffset extends CounterTracker {
    static MAX_BITSET_SIZE: number;
    static build(paramquantifierBounds: number[], paramtrackerSizes: number[], paramdataBuilder: CounterTrackerData$Builder, paramtrivialAlwaysReEnter: number[], paramtrivialNeverReEnter: number[], paramregressionTestMode: boolean): (Object | null)[];
    constructor(min: number, max: number, numberOfSets: number, dataBuilder: CounterTrackerData$Builder)
    // private bitsetLength: number;
    // private fixedOffset: number;
    // private initTemplate: number[];
    // private max: number;
    // private min: number;
    // private set1Template: number[];
    // private upperBound: number;
    anyGeMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMax(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    apply(op: number, fixedData: number[], intArrays: number[][]): void;
    bitSetDataToString(fixedData: number[], stateId: number): string;
    // private checkConsistency(fixedData: number[], idDst: number): boolean;
    dumpState(sId: number, fixedData: number[], intArrays: number[][]): string;
    getValues(fixedData: number[], stateId: number): number[];
    inc(idSrc: number, idDst: number, modifier: number, fixedData: number[]): void;
    // private incUnion(fixedData: number[], dstArg: number, offsetSrc: number, minBitSrcArg: number, maxBitSrcArg: number, minBitDstArg: number, copyIndexSrc: number, copyLengthSrc: number, isSelfUpdate: boolean): void;
    init(fixed: number[], intArrays: number[][]): void;
    iterator(fixedData: number[], stateId: number): PrimitiveIterator$OfInt;
    maintain(idSrc: number, idDst: number, modifier: number, fixedData: number[]): void;
    // private maintainUnion(fixedData: number[], src: number, dst: number): void;
    // private mapId(sId: number, fixedData: number[]): number;
    // private recalculateMinBit(fixedData: number[], src: number, srcLength: number, offsetSrc: number): number;
    set1(idDst: number, modifier: number, fixedData: number[]): void;
    support(operation: number): boolean;
    // private swapIndices(idA: number, idB: number, fixedData: number[]): void;
    valuesToString(fixedData: number[], stateId: number): string;
}