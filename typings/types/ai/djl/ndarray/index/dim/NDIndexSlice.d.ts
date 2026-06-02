import type { NDIndexElement } from '../../../../../ai/djl/ndarray/index/dim/NDIndexElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NDIndexSlice extends Object implements NDIndexElement {
    constructor(arg0: number, arg1: number, arg2: number)
    readonly max: number;
    readonly min: number;
    readonly step: number;
    getMax(): number;
    getMin(): number;
    getRank(): number;
    getStep(): number;
}