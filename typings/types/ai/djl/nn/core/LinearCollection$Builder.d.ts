import type { LinearCollection } from '../../../../ai/djl/nn/core/LinearCollection.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LinearCollection$Builder extends Object {
    constructor()
    // private bias: boolean;
    // private units: number;
    build(): LinearCollection;
    optBias(arg0: boolean): LinearCollection$Builder;
    setUnits(arg0: number): LinearCollection$Builder;
}