import type { Dropout } from '../../../../ai/djl/nn/norm/Dropout.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Dropout$Builder extends Object {
    constructor()
    // private rate: number;
    build(): Dropout;
    optRate(arg0: number): Dropout$Builder;
}