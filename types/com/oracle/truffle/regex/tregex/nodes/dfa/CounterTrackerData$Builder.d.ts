import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CounterTrackerData$Builder extends Object {
    constructor()
    readonly fixedDataSize: number;
    // private nIntArrays: number;
    getFixedDataSize(): number;
    getNumberOfIntArrays(): number;
    requestFixedSize(requestedSize: number): void;
    requestIntArrays(nArrays: number): void;
}