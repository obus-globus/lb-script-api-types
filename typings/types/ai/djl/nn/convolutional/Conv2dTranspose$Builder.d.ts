import type { Conv2dTranspose } from '../../../../ai/djl/nn/convolutional/Conv2dTranspose.d.ts'
import type { Deconvolution$DeconvolutionBuilder } from '../../../../ai/djl/nn/convolutional/Deconvolution$DeconvolutionBuilder.d.ts'
export class Conv2dTranspose$Builder extends Deconvolution$DeconvolutionBuilder<Conv2dTranspose$Builder> {
    constructor()
    build(): Conv2dTranspose;
    self(): Conv2dTranspose$Builder;
}