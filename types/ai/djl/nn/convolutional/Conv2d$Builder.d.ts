import type { Conv2d } from '../../../../ai/djl/nn/convolutional/Conv2d.d.ts'
import type { Convolution$ConvolutionBuilder } from '../../../../ai/djl/nn/convolutional/Convolution$ConvolutionBuilder.d.ts'
export class Conv2d$Builder extends Convolution$ConvolutionBuilder<Conv2d$Builder> {
    constructor()
    build(): Conv2d;
    self(): Conv2d$Builder;
}