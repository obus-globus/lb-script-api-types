import type { BatchNorm } from '../../../../ai/djl/nn/norm/BatchNorm.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BatchNorm$BaseBuilder<T extends BatchNorm$BaseBuilder<T>> extends Object {
    constructor()
    // private axis: number;
    // private center: boolean;
    // private epsilon: number;
    // private momentum: number;
    // private scale: boolean;
    build(): BatchNorm;
    optAxis(arg0: number): T;
    optCenter(arg0: boolean): T;
    optEpsilon(arg0: number): T;
    optMomentum(arg0: number): T;
    optScale(arg0: boolean): T;
    self(): T;
}