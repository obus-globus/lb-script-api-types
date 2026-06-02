import type { NDArray } from '../../../../../ai/djl/ndarray/NDArray.d.ts'
import type { NDIndexElement } from '../../../../../ai/djl/ndarray/index/dim/NDIndexElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NDIndexTake extends Object implements NDIndexElement {
    constructor(arg0: NDArray)
    readonly index: NDArray;
    getIndex(): NDArray;
    getRank(): number;
}