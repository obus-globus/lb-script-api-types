import type { CounterTracker } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTracker.d.ts'
import type { CounterTrackerData$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerData$Builder.d.ts'
import type { RegressionModeCounterTracker$TrackerGuard } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/RegressionModeCounterTracker$TrackerGuard.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RegressionModeCounterTracker extends CounterTracker {
    static build(paramquantifierBounds: number[], paramtrackerSizes: number[], paramdataBuilder: CounterTrackerData$Builder, paramtrivialAlwaysReEnter: number[], paramtrivialNeverReEnter: number[], paramregressionTestMode: boolean): (Object | null)[];
    constructor(min: number, max: number, numberOfCells: number, isTrivialAlwaysReEnter: boolean, isTrivialNeverReEnter: boolean, dataBuilder: CounterTrackerData$Builder)
    // private min: number;
    // private trackers: CounterTracker[];
    anyGeMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMax(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    apply(operation: number, fixedData: number[], intArrays: number[][]): void;
    dumpState(sId: number, fixedData: number[], intArrays: number[][]): string;
    // private ensureConsistency(sId: number, fixedData: number[], intArrays: number[][]): void;
    init(fixedData: number[], intArrays: number[][]): void;
    // private onAll(sId: number, fixedData: number[], intArrays: number[][], f: (param0: CounterTracker, param1: number, param2: number[], param3: (Object | null)[]) => boolean): boolean;
    support(operation: number): boolean;
}