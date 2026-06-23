import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Optimizer$OptimizerBuilder<T extends Optimizer$OptimizerBuilder<Optimizer$OptimizerBuilder<any>>> extends Object {
    constructor()
    // private beginNumUpdate: number;
    // private clipGrad: number;
    // private rescaleGrad: number;
    // private weightDecays: number;
    optBeginNumUpdate(arg0: number): T;
    optClipGrad(arg0: number): T;
    optWeightDecays(arg0: number): T;
    self(): T;
    setRescaleGrad(arg0: number): T;
}