import type { Conv3d } from '../../../../ai/djl/nn/convolutional/Conv3d.d.ts'
import type { Convolution$ConvolutionBuilder } from '../../../../ai/djl/nn/convolutional/Convolution$ConvolutionBuilder.d.ts'
export class Conv3d$Builder extends Convolution$ConvolutionBuilder<Conv3d$Builder> {
    constructor()
    build(): Conv3d;
    self(): Conv3d$Builder;
}