import type { NDArray } from '../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDIndexElement } from '../../../../ai/djl/ndarray/index/dim/NDIndexElement.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NDIndex extends Object {
    static sliceAxis(paramarg0: number, paramarg1: number, paramarg2: number): NDIndex;
    constructor()
    constructor(...arg0: number[])
    constructor(arg0: string, ...arg1: Object[])
    readonly ellipsisIndex: number;
    readonly indices: NDIndexElement[];
    readonly rank: number;
    addAllDim(): NDIndex;
    addAllDim(arg0: number): NDIndex;
    addBooleanIndex(arg0: NDArray): NDIndex;
    addEllipseDim(): NDIndex;
    // private addIndexItem(arg0: string, arg1: number, arg2: Object[]): number;
    addIndices(...arg0: number[]): NDIndex;
    addIndices(arg0: string, ...arg1: Object[]): NDIndex;
    addPickDim(arg0: NDArray): NDIndex;
    addSliceDim(arg0: number, arg1: number): NDIndex;
    addSliceDim(arg0: number, arg1: number, arg2: number): NDIndex;
    get(arg0: number): NDIndexElement;
    getEllipsisIndex(): number;
    getIndices(): NDIndexElement[];
    getRank(): number;
    // private parseSliceItem(arg0: string, arg1: number, ...arg2: Object[]): number;
    stream(): Stream<NDIndexElement>;
}