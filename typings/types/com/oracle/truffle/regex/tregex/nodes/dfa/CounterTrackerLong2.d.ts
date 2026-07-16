import type { CounterTracker } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTracker.d.ts'
import type { CounterTrackerData$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerData$Builder.d.ts'
export class CounterTrackerLong2 extends CounterTracker {
    static build(paramquantifierBounds: number[], paramtrackerSizes: number[], paramdataBuilder: CounterTrackerData$Builder, paramtrivialAlwaysReEnter: number[], paramtrivialNeverReEnter: number[], paramregressionTestMode: boolean): CounterTracker[];
    constructor(min: number, max: number, numberOfCells: number, dataBuilder: CounterTrackerData$Builder)
    // private fixedOffset: number;
    // private maskGeMin0: number;
    // private maskGeMin1: number;
    // private maskLtMax0: number;
    // private maskLtMax1: number;
    // private maskLtMin0: number;
    // private maskLtMin1: number;
    // private max: number;
    // private min: number;
    // private saturateMinMask: number;
    anyGeMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMax(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    apply(op: number, data: number[], intArrays: number[][]): void;
    dumpState(sId: number, fixedData: number[], intArrays: number[][]): string;
    init(fixedData: number[], intArrays: number[][]): void;
    // private intersect(sId: number, fixedData: number[], mask0: number, mask1: number): boolean;
    // private mapId(sId: number): number;
    support(operation: number): boolean;
}