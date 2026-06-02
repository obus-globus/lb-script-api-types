import type { NDIndexElement } from '../../../../../ai/djl/ndarray/index/dim/NDIndexElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NDIndexFixed extends Object implements NDIndexElement {
    constructor(arg0: number)
    readonly index: number;
    getIndex(): number;
    getRank(): number;
}