import type { Conv1d } from '../../../../ai/djl/nn/convolutional/Conv1d.d.ts'
import type { Convolution$ConvolutionBuilder } from '../../../../ai/djl/nn/convolutional/Convolution$ConvolutionBuilder.d.ts'
export class Conv1d$Builder extends Convolution$ConvolutionBuilder<Conv1d$Builder> {
    constructor()
    build(): Conv1d;
    self(): Conv1d$Builder;
}