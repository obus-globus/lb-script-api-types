import type { Shape } from '../../../../ai/djl/ndarray/types/Shape.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Deconvolution$DeconvolutionBuilder<T extends Deconvolution$DeconvolutionBuilder<Deconvolution$DeconvolutionBuilder<Object>>> extends Object {
    constructor()
    // private dilation: Shape;
    // private filters: number;
    // private groups: number;
    // private includeBias: boolean;
    // private kernelShape: Shape;
    // private outPadding: Shape;
    // private padding: Shape;
    // private stride: Shape;
    optBias(arg0: boolean): T;
    optDilation(arg0: Shape): T;
    optGroups(arg0: number): T;
    optOutPadding(arg0: Shape): T;
    optPadding(arg0: Shape): T;
    optStride(arg0: Shape): T;
    self(): T;
    setFilters(arg0: number): T;
    setKernelShape(arg0: Shape): T;
    validate(): void;
}