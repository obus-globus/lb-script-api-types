import type { Conv1dTranspose } from '../../../../ai/djl/nn/convolutional/Conv1dTranspose.d.ts'
import type { Deconvolution$DeconvolutionBuilder } from '../../../../ai/djl/nn/convolutional/Deconvolution$DeconvolutionBuilder.d.ts'
export class Conv1dTranspose$Builder extends Deconvolution$DeconvolutionBuilder<Conv1dTranspose$Builder> {
    constructor()
    build(): Conv1dTranspose;
    self(): Conv1dTranspose$Builder;
}