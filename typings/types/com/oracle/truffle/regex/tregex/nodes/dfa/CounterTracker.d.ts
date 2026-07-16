import type { CounterTrackerData$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerData$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class CounterTracker extends Object {
    static build(paramquantifierBounds: number[], paramtrackerSizes: number[], paramdataBuilder: CounterTrackerData$Builder, paramtrivialAlwaysReEnter: number[], paramtrivialNeverReEnter: number[], paramregressionTestMode: boolean): CounterTracker[];
    constructor()
    anyGeMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMax(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    apply(operation: number, fixedData: number[], intArrays: number[][]): void;
    canExecute(constraint: number, fixedData: number[], intArrays: number[][]): boolean;
    dumpState(sId: number, fixedData: number[], intArrays: number[][]): string;
    init(fixedData: number[], intArrays: number[][]): void;
    support(operation: number): boolean;
}