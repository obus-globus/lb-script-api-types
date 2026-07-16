import type { CounterTracker } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTracker.d.ts'
import type { CounterTrackerData$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerData$Builder.d.ts'
import type { CounterTrackerList$Field } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerList$Field.d.ts'
export class CounterTrackerList extends CounterTracker {
    static build(paramquantifierBounds: number[], paramtrackerSizes: number[], paramdataBuilder: CounterTrackerData$Builder, paramtrivialAlwaysReEnter: number[], paramtrivialNeverReEnter: number[], paramregressionTestMode: boolean): CounterTracker[];
    constructor(min: number, max: number, numberOfCells: number, dataBuilder: CounterTrackerData$Builder)
    // private fixedOffset: number;
    // private initTemplate: number[];
    // private max: number;
    // private min: number;
    // private numberOfCells: number;
    anyGeMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMax(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    anyLtMin(sId: number, fixedData: number[], intArrays: number[][]): boolean;
    apply(op: number, fixedData: number[], intArrays: number[][]): void;
    // private clear(sId: number, fixedData: number[]): void;
    // private copy(src: number, dst: number, fixedData: number[], intArrays: number[][]): void;
    dumpState(sId: number, fixedData: number[], intArrays: number[][]): string;
    // private getBuffer(sId: number, fixedData: number[], intArrays: number[][]): number[];
    // private getBufferPointer(sId: number, fixedData: number[]): number;
    // private getField(sId: number, fixedData: number[], field: CounterTrackerList$Field): number;
    // private getMaxValue(sId: number, fixedData: number[], intArrays: number[][], offset: number): number;
    // private getMinValue(sId: number, fixedData: number[], intArrays: number[][], offset: number): number;
    // private getOffset(sId: number, fixedData: number[]): number;
    // private getSize(sId: number, fixedData: number[]): number;
    // private getStart(sId: number, fixedData: number[]): number;
    // private incAll(sId: number, fixedData: number[], intArrays: number[][]): void;
    init(fixedData: number[], intArrays: number[][]): void;
    // private removeMaxValue(sId: number, fixedData: number[], buffer: number[], start: number, size: number): void;
    // private set1(sId: number, fixedData: number[], intArrays: number[][]): void;
    // private setField(sId: number, fixedData: number[], field: CounterTrackerList$Field, value: number): void;
    // private setOffset(sId: number, fixedData: number[], value: number): void;
    // private setSize(sId: number, fixedData: number[], value: number): void;
    // private setStart(sId: number, fixedData: number[], value: number): void;
    support(operation: number): boolean;
    // private swap(from: number, to: number, fixedData: number[]): void;
}