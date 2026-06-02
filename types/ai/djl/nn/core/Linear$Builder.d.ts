import type { Linear } from '../../../../ai/djl/nn/core/Linear.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Linear$Builder extends Object {
    constructor()
    // private bias: boolean;
    // private units: number;
    build(): Linear;
    optBias(arg0: boolean): Linear$Builder;
    setUnits(arg0: number): Linear$Builder;
}